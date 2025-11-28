from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.core.security import verify_password, create_access_token
from app.models.user import User
from datetime import timedelta
from app.core.config import settings

router = APIRouter()

@router.post("/signup", response_model=schemas.User)
def signup(
    *,
    db: Session = Depends(deps.get_db),
    user_in: schemas.UserCreate,
) -> User:
    """
    Create new user.
    """
    user = crud.get_user_by_email(db, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system.",
        )
    
    user = crud.create_user(db, user=user_in)
    return user

@router.post("/login", response_model=schemas.Token)
def login(
    *,
    db: Session = Depends(deps.get_db),
    user_in: schemas.UserCreate,
) -> dict:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    user = crud.get_user_by_email(db, email=user_in.email)
    if not user or not verify_password(user_in.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"user_id": user.id, "role": user.role}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me", response_model=schemas.User)
def read_user_me(
    current_user: User = Depends(deps.get_current_active_user),
) -> User:
    """
    Get current active user.
    """
    return current_user

@router.post("/refresh", response_model=schemas.Token)
def refresh_token(
    current_user: User = Depends(deps.get_current_active_user),
) -> dict:
    """
    Refresh access token
    """
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"user_id": current_user.id, "role": current_user.role}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}