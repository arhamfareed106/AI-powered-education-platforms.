from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.assignment import Grade

router = APIRouter()

@router.post("/", response_model=schemas.Grade)
def create_grade(
    *,
    db: Session = Depends(deps.get_db),
    grade_in: schemas.GradeCreate,
) -> Grade:
    """
    Create new grade.
    """
    grade = crud.create_grade(db, grade=grade_in)
    return grade

@router.get("/{grade_id}", response_model=schemas.Grade)
def read_grade(
    *,
    db: Session = Depends(deps.get_db),
    grade_id: int,
) -> Grade:
    """
    Get a specific grade by id.
    """
    grade = crud.get_grade(db, grade_id=grade_id)
    if not grade:
        raise HTTPException(status_code=404, detail="Grade not found")
    return grade

@router.get("/submission/{submission_id}", response_model=schemas.Grade)
def read_grade_by_submission(
    *,
    db: Session = Depends(deps.get_db),
    submission_id: int,
) -> Grade:
    """
    Get grade by submission id.
    """
    grade = crud.get_grade_by_submission(db, submission_id=submission_id)
    if not grade:
        raise HTTPException(status_code=404, detail="Grade not found")
    return grade

@router.put("/{grade_id}", response_model=schemas.Grade)
def update_grade(
    *,
    db: Session = Depends(deps.get_db),
    grade_id: int,
    grade_in: schemas.GradeUpdate,
) -> Grade:
    """
    Update a grade.
    """
    grade = crud.get_grade(db, grade_id=grade_id)
    if not grade:
        raise HTTPException(status_code=404, detail="Grade not found")
    grade = crud.update_grade(db, db_grade=grade, grade_update=grade_in)
    return grade

@router.delete("/{grade_id}", response_model=schemas.Grade)
def delete_grade(
    *,
    db: Session = Depends(deps.get_db),
    grade_id: int,
) -> Grade:
    """
    Delete a grade.
    """
    grade = crud.get_grade(db, grade_id=grade_id)
    if not grade:
        raise HTTPException(status_code=404, detail="Grade not found")
    grade = crud.delete_grade(db, grade_id=grade_id)
    return grade