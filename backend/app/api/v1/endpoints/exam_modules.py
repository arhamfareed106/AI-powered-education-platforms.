from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.user import User
from app.models.exam import Exam, ExamQuestion, ExamSubmission
from typing import List

router = APIRouter()

@router.post("/exams/", response_model=schemas.Exam)
def create_exam(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    exam_in: schemas.ExamCreate,
) -> Exam:
    """
    Create a new exam (IB or AP).
    """
    if current_user.role != "teacher" and current_user.role != "super_admin":
        raise HTTPException(status_code=403, detail="Only teachers or admins can create exams")
    
    exam = crud.create_exam(db, exam=exam_in)
    return exam

@router.get("/exams/", response_model=List[schemas.Exam])
def read_exams(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    exam_type: str = None,
    skip: int = 0,
    limit: int = 100,
) -> List[Exam]:
    """
    Retrieve exams.
    """
    exams = crud.get_exams(db, exam_type=exam_type, skip=skip, limit=limit)
    return exams

@router.get("/exams/{exam_id}", response_model=schemas.ExamDetail)
def read_exam_detail(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    exam_id: int,
) -> Exam:
    """
    Get detailed exam information.
    """
    exam = crud.get_exam(db, exam_id=exam_id)
    if not exam:
        raise HTTPException(status_code=404, detail="Exam not found")
    return exam

@router.post("/exams/{exam_id}/questions/", response_model=schemas.ExamQuestion)
def create_exam_question(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    exam_id: int,
    question_in: schemas.ExamQuestionCreate,
) -> ExamQuestion:
    """
    Add a question to an exam.
    """
    if current_user.role != "teacher" and current_user.role != "super_admin":
        raise HTTPException(status_code=403, detail="Only teachers or admins can create exam questions")
    
    # Verify exam exists
    exam = crud.get_exam(db, exam_id=exam_id)
    if not exam:
        raise HTTPException(status_code=404, detail="Exam not found")
    
    question_in.exam_id = exam_id
    question = crud.create_exam_question(db, question=question_in)
    return question

@router.post("/exams/{exam_id}/submit/", response_model=schemas.ExamSubmission)
def submit_exam(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    exam_id: int,
    submission_in: schemas.ExamSubmissionCreate,
) -> ExamSubmission:
    """
    Submit an exam for grading.
    """
    # Verify exam exists
    exam = crud.get_exam(db, exam_id=exam_id)
    if not exam:
        raise HTTPException(status_code=404, detail="Exam not found")
    
    # Create submission
    submission_in.exam_id = exam_id
    submission_in.user_id = current_user.id
    submission = crud.create_exam_submission(db, submission=submission_in)
    return submission

@router.post("/exams/submissions/{submission_id}/grade/", response_model=schemas.ExamSubmission)
def grade_exam_submission(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    submission_id: int,
    grading_data: schemas.ExamGrading,
) -> ExamSubmission:
    """
    Grade an exam submission using official rubrics.
    """
    if current_user.role != "teacher" and current_user.role != "super_admin":
        raise HTTPException(status_code=403, detail="Only teachers or admins can grade exams")
    
    # Verify submission exists
    submission = crud.get_exam_submission(db, submission_id=submission_id)
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    
    # Grade submission
    graded_submission = crud.grade_exam_submission(db, submission_id=submission_id, grading_data=grading_data)
    return graded_submission

@router.get("/exams/submissions/{submission_id}", response_model=schemas.ExamSubmissionDetail)
def read_exam_submission_detail(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    submission_id: int,
) -> ExamSubmission:
    """
    Get detailed exam submission information.
    """
    submission = crud.get_exam_submission(db, submission_id=submission_id)
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    
    # Check authorization
    if current_user.role != "teacher" and current_user.role != "super_admin" and submission.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to view this submission")
    
    return submission

@router.post("/exams/{exam_id}/practice/", response_model=dict)
def start_practice_session(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    exam_id: int,
) -> dict:
    """
    Start a practice session for an exam.
    """
    # Verify exam exists
    exam = crud.get_exam(db, exam_id=exam_id)
    if not exam:
        raise HTTPException(status_code=404, detail="Exam not found")
    
    # Create practice session
    practice_session = {
        "session_id": f"practice_{exam_id}_{current_user.id}",
        "exam_id": exam_id,
        "user_id": current_user.id,
        "started_at": "2025-12-05T10:00:00Z",
        "questions": crud.get_random_exam_questions(db, exam_id=exam_id, count=5)
    }
    
    return practice_session

@router.post("/exams/practice/{session_id}/submit-answer/", response_model=dict)
def submit_practice_answer(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    session_id: str,
    answer_data: dict,
) -> dict:
    """
    Submit an answer for a practice session.
    """
    # Process answer and provide immediate feedback
    feedback = {
        "question_id": answer_data.get("question_id"),
        "is_correct": True,  # In a real implementation, this would be determined by checking the answer
        "feedback": "Correct! Well done.",
        "explanation": "This is the correct answer because...",
        "next_question": "question_id_2"
    }
    
    return feedback