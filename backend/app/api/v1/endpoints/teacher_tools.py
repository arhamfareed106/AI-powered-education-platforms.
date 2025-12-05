from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.user import User
from app.models.classroom import Classroom
from app.models.assignment import Assignment
from app.models.student_progress import StudentProgress
from typing import List

router = APIRouter()

@router.post("/classrooms/", response_model=schemas.Classroom)
def create_classroom(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    classroom_in: schemas.ClassroomCreate,
) -> Classroom:
    """
    Create a new classroom.
    """
    if current_user.role != "teacher":
        raise HTTPException(status_code=403, detail="Only teachers can create classrooms")
    
    classroom_in.teacher_id = current_user.id
    classroom = crud.create_classroom(db, classroom=classroom_in)
    return classroom

@router.get("/classrooms/", response_model=List[schemas.Classroom])
def read_classrooms(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    skip: int = 0,
    limit: int = 100,
) -> List[Classroom]:
    """
    Retrieve classrooms for the current teacher.
    """
    if current_user.role != "teacher":
        raise HTTPException(status_code=403, detail="Only teachers can view classrooms")
    
    classrooms = crud.get_classrooms_by_teacher(db, teacher_id=current_user.id, skip=skip, limit=limit)
    return classrooms

@router.post("/assignments/", response_model=schemas.Assignment)
def create_assignment(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    assignment_in: schemas.AssignmentCreate,
) -> Assignment:
    """
    Create a new assignment.
    """
    if current_user.role != "teacher":
        raise HTTPException(status_code=403, detail="Only teachers can create assignments")
    
    # Verify the teacher owns the classroom
    classroom = crud.get_classroom(db, classroom_id=assignment_in.classroom_id)
    if not classroom or classroom.teacher_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to create assignment for this classroom")
    
    assignment = crud.create_assignment(db, assignment=assignment_in)
    return assignment

@router.get("/assignments/classroom/{classroom_id}", response_model=List[schemas.Assignment])
def read_assignments_by_classroom(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    classroom_id: int,
    skip: int = 0,
    limit: int = 100,
) -> List[Assignment]:
    """
    Retrieve assignments for a specific classroom.
    """
    # Verify the teacher owns the classroom
    classroom = crud.get_classroom(db, classroom_id=classroom_id)
    if not classroom or classroom.teacher_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to view assignments for this classroom")
    
    assignments = crud.get_assignments_by_classroom(db, classroom_id=classroom_id, skip=skip, limit=limit)
    return assignments

@router.post("/grade-assignment/{assignment_id}", response_model=schemas.StudentProgress)
def grade_assignment(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    assignment_id: int,
    grading_data: schemas.GradingCreate,
) -> StudentProgress:
    """
    Grade a student's assignment.
    """
    if current_user.role != "teacher":
        raise HTTPException(status_code=403, detail="Only teachers can grade assignments")
    
    # Verify the teacher owns the assignment
    assignment = crud.get_assignment(db, assignment_id=assignment_id)
    if not assignment:
        raise HTTPException(status_code=404, detail="Assignment not found")
    
    classroom = crud.get_classroom(db, classroom_id=assignment.classroom_id)
    if not classroom or classroom.teacher_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to grade this assignment")
    
    # Create or update student progress
    progress = crud.create_or_update_student_progress(db, progress_data=grading_data)
    return progress

@router.get("/student-progress/{classroom_id}", response_model=List[schemas.StudentProgress])
def get_classroom_progress(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    classroom_id: int,
    skip: int = 0,
    limit: int = 100,
) -> List[StudentProgress]:
    """
    Get progress for all students in a classroom.
    """
    # Verify the teacher owns the classroom
    classroom = crud.get_classroom(db, classroom_id=classroom_id)
    if not classroom or classroom.teacher_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to view progress for this classroom")
    
    progress_list = crud.get_student_progress_by_classroom(db, classroom_id=classroom_id, skip=skip, limit=limit)
    return progress_list

@router.get("/analytics/{classroom_id}", response_model=dict)
def get_classroom_analytics(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    classroom_id: int,
) -> dict:
    """
    Get analytics for a classroom.
    """
    # Verify the teacher owns the classroom
    classroom = crud.get_classroom(db, classroom_id=classroom_id)
    if not classroom or classroom.teacher_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to view analytics for this classroom")
    
    # Get analytics data
    analytics = {
        "classroom_id": classroom_id,
        "total_students": crud.get_student_count_in_classroom(db, classroom_id=classroom_id),
        "average_score": crud.get_average_assignment_score(db, classroom_id=classroom_id),
        "completion_rate": crud.get_assignment_completion_rate(db, classroom_id=classroom_id),
        "skills_progress": crud.get_skills_progress_data(db, classroom_id=classroom_id)
    }
    
    return analytics