from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.assignment import Assignment

router = APIRouter()

@router.post("/", response_model=schemas.Assignment)
def create_assignment(
    *,
    db: Session = Depends(deps.get_db),
    assignment_in: schemas.AssignmentCreate,
) -> Assignment:
    """
    Create new assignment.
    """
    assignment = crud.create_assignment(db, assignment=assignment_in)
    return assignment

@router.get("/{assignment_id}", response_model=schemas.Assignment)
def read_assignment(
    *,
    db: Session = Depends(deps.get_db),
    assignment_id: int,
) -> Assignment:
    """
    Get a specific assignment by id.
    """
    assignment = crud.get_assignment(db, assignment_id=assignment_id)
    if not assignment:
        raise HTTPException(status_code=404, detail="Assignment not found")
    return assignment

@router.get("/class/{class_id}", response_model=list[schemas.Assignment])
def read_assignments_by_class(
    *,
    db: Session = Depends(deps.get_db),
    class_id: int,
    skip: int = 0,
    limit: int = 100,
) -> list[Assignment]:
    """
    Retrieve assignments by class.
    """
    assignments = crud.get_assignments_by_class(db, class_id=class_id, skip=skip, limit=limit)
    return assignments

@router.put("/{assignment_id}", response_model=schemas.Assignment)
def update_assignment(
    *,
    db: Session = Depends(deps.get_db),
    assignment_id: int,
    assignment_in: schemas.AssignmentUpdate,
) -> Assignment:
    """
    Update an assignment.
    """
    assignment = crud.get_assignment(db, assignment_id=assignment_id)
    if not assignment:
        raise HTTPException(status_code=404, detail="Assignment not found")
    assignment = crud.update_assignment(db, db_assignment=assignment, assignment_update=assignment_in)
    return assignment

@router.delete("/{assignment_id}", response_model=schemas.Assignment)
def delete_assignment(
    *,
    db: Session = Depends(deps.get_db),
    assignment_id: int,
) -> Assignment:
    """
    Delete an assignment.
    """
    assignment = crud.get_assignment(db, assignment_id=assignment_id)
    if not assignment:
        raise HTTPException(status_code=404, detail="Assignment not found")
    assignment = crud.delete_assignment(db, assignment_id=assignment_id)
    return assignment