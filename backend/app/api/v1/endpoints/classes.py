from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.user import Class

router = APIRouter()

@router.post("/", response_model=schemas.Class)
def create_class(
    *,
    db: Session = Depends(deps.get_db),
    class_in: schemas.ClassCreate,
) -> Class:
    """
    Create new class.
    """
    class_ = crud.create_class(db, class_=class_in)
    return class_

@router.get("/{class_id}", response_model=schemas.Class)
def read_class(
    *,
    db: Session = Depends(deps.get_db),
    class_id: int,
) -> Class:
    """
    Get a specific class by id.
    """
    class_ = crud.get_class(db, class_id=class_id)
    if not class_:
        raise HTTPException(status_code=404, detail="Class not found")
    return class_

@router.get("/", response_model=list[schemas.Class])
def read_classes(
    *,
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
) -> list[Class]:
    """
    Retrieve classes.
    """
    classes = crud.get_classes(db, skip=skip, limit=limit)
    return classes

@router.put("/{class_id}", response_model=schemas.Class)
def update_class(
    *,
    db: Session = Depends(deps.get_db),
    class_id: int,
    class_in: schemas.ClassUpdate,
) -> Class:
    """
    Update a class.
    """
    class_ = crud.get_class(db, class_id=class_id)
    if not class_:
        raise HTTPException(status_code=404, detail="Class not found")
    class_ = crud.update_class(db, db_class=class_, class_update=class_in)
    return class_

@router.delete("/{class_id}", response_model=schemas.Class)
def delete_class(
    *,
    db: Session = Depends(deps.get_db),
    class_id: int,
) -> Class:
    """
    Delete a class.
    """
    class_ = crud.get_class(db, class_id=class_id)
    if not class_:
        raise HTTPException(status_code=404, detail="Class not found")
    class_ = crud.delete_class(db, class_id=class_id)
    return class_

@router.post("/{class_id}/students/{user_id}", response_model=schemas.User)
def add_student_to_class(
    *,
    db: Session = Depends(deps.get_db),
    class_id: int,
    user_id: int,
) -> schemas.User:
    """
    Add a student to a class.
    """
    # Check if class exists
    class_ = crud.get_class(db, class_id=class_id)
    if not class_:
        raise HTTPException(status_code=404, detail="Class not found")
    
    # Check if user exists
    user = crud.get_user(db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Add student to class
    crud.add_student_to_class(db, user_id=user_id, class_id=class_id)
    
    return user

@router.delete("/{class_id}/students/{user_id}", response_model=schemas.User)
def remove_student_from_class(
    *,
    db: Session = Depends(deps.get_db),
    class_id: int,
    user_id: int,
) -> schemas.User:
    """
    Remove a student from a class.
    """
    # Check if class exists
    class_ = crud.get_class(db, class_id=class_id)
    if not class_:
        raise HTTPException(status_code=404, detail="Class not found")
    
    # Check if user exists
    user = crud.get_user(db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Remove student from class
    crud.remove_student_from_class(db, user_id=user_id, class_id=class_id)
    
    return user