from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.get("/{user_id}", response_model=schemas.User)
def read_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
) -> User:
    """
    Get a specific user by id.
    """
    user = crud.get_user(db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/{user_id}", response_model=schemas.User)
def update_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
    user_in: schemas.UserUpdate,
) -> User:
    """
    Update a user.
    """
    user = crud.get_user(db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user = crud.update_user(db, db_user=user, user_update=user_in)
    return user

@router.delete("/{user_id}", response_model=schemas.User)
def delete_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
) -> User:
    """
    Delete a user.
    """
    user = crud.get_user(db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user = crud.delete_user(db, user_id=user_id)
    return user