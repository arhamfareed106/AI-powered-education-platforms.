from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import EmailStr
from app import crud, schemas
from app.api import deps
from app.core.config import settings
from app.core.security import create_access_token, create_refresh_token
from app.models.user import User
from datetime import timedelta

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
    # Check if user already exists
    existing_user = crud.user.get_by_email(db, email=user_in.email)
    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system.",
        )
    
    existing_username = crud.user.get_by_username(db, username=user_in.username)
    if existing_username:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system.",
        )
    
    # Create user in database
    user = crud.user.create(db, obj_in=user_in)
    return user

@router.post("/login", response_model=schemas.Token)
def login(
    *,
    db: Session = Depends(deps.get_db),
    user_in: schemas.UserLogin,
) -> dict:
    """
    OAuth2 compatible token login, get an access token for future requests.
    """
    # Authenticate user
    user = crud.user.authenticate(db, email=user_in.email, password=user_in.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    if not crud.user.is_active(user):
        raise HTTPException(status_code=400, detail="Inactive user")
    
    # Create tokens
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"user_id": user.id, "role": user.role}, 
        expires_delta=access_token_expires
    )
    refresh_token = create_refresh_token(data={"user_id": user.id})
    
    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }

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
        data={"user_id": current_user.id, "role": current_user.role}, 
        expires_delta=access_token_expires
    )
    refresh_token_new = create_refresh_token(data={"user_id": current_user.id})
    
    return {
        "access_token": access_token,
        "refresh_token": refresh_token_new,
        "token_type": "bearer"
    }

@router.post("/forgot-password")
def forgot_password(
    email: EmailStr,
    db: Session = Depends(deps.get_db),
) -> dict:
    """
    Send password reset email
    """
    user = crud.user.get_by_email(db, email=email)
    if not user:
        # Don't reveal that user doesn't exist
        return {"message": "If the email exists, a reset link has been sent"}
    
    # TODO: Implement email sending with reset token
    return {"message": "If the email exists, a reset link has been sent"}

@router.post("/reset-password")
def reset_password(
    token: str,
    new_password: str,
    db: Session = Depends(deps.get_db),
) -> dict:
    """
    Reset password with token
    """
    # TODO: Implement password reset with token validation
    return {"message": "Password reset successful"}