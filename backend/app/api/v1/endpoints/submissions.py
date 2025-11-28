from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.assignment import Submission

router = APIRouter()

@router.post("/", response_model=schemas.Submission)
def create_submission(
    *,
    db: Session = Depends(deps.get_db),
    submission_in: schemas.SubmissionCreate,
) -> Submission:
    """
    Create new submission.
    """
    submission = crud.create_submission(db, submission=submission_in)
    return submission

@router.get("/{submission_id}", response_model=schemas.Submission)
def read_submission(
    *,
    db: Session = Depends(deps.get_db),
    submission_id: int,
) -> Submission:
    """
    Get a specific submission by id.
    """
    submission = crud.get_submission(db, submission_id=submission_id)
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    return submission

@router.get("/assignment/{assignment_id}", response_model=list[schemas.Submission])
def read_submissions_by_assignment(
    *,
    db: Session = Depends(deps.get_db),
    assignment_id: int,
    skip: int = 0,
    limit: int = 100,
) -> list[Submission]:
    """
    Retrieve submissions by assignment.
    """
    submissions = crud.get_submissions_by_assignment(db, assignment_id=assignment_id, skip=skip, limit=limit)
    return submissions

@router.get("/student/{student_id}", response_model=list[schemas.Submission])
def read_submissions_by_student(
    *,
    db: Session = Depends(deps.get_db),
    student_id: int,
    skip: int = 0,
    limit: int = 100,
) -> list[Submission]:
    """
    Retrieve submissions by student.
    """
    submissions = crud.get_submissions_by_student(db, student_id=student_id, skip=skip, limit=limit)
    return submissions

@router.put("/{submission_id}", response_model=schemas.Submission)
def update_submission(
    *,
    db: Session = Depends(deps.get_db),
    submission_id: int,
    submission_in: schemas.SubmissionUpdate,
) -> Submission:
    """
    Update a submission.
    """
    submission = crud.get_submission(db, submission_id=submission_id)
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    submission = crud.update_submission(db, db_submission=submission, submission_update=submission_in)
    return submission

@router.delete("/{submission_id}", response_model=schemas.Submission)
def delete_submission(
    *,
    db: Session = Depends(deps.get_db),
    submission_id: int,
) -> Submission:
    """
    Delete a submission.
    """
    submission = crud.get_submission(db, submission_id=submission_id)
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    submission = crud.delete_submission(db, submission_id=submission_id)
    return submission