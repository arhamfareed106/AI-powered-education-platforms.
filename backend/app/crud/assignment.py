from sqlalchemy.orm import Session
from app.models.assignment import Assignment, Submission, Grade, WritingScore, SpeechScore
from app.schemas.assignment import AssignmentCreate, AssignmentUpdate, SubmissionCreate, SubmissionUpdate, GradeCreate, GradeUpdate, WritingScoreCreate, SpeechScoreCreate

# Assignment CRUD operations
def get_assignment(db: Session, assignment_id: int):
    return db.query(Assignment).filter(Assignment.id == assignment_id).first()

def get_assignments_by_class(db: Session, class_id: int, skip: int = 0, limit: int = 100):
    return db.query(Assignment).filter(Assignment.class_id == class_id).offset(skip).limit(limit).all()

def create_assignment(db: Session, assignment: AssignmentCreate):
    db_assignment = Assignment(**assignment.dict())
    db.add(db_assignment)
    db.commit()
    db.refresh(db_assignment)
    return db_assignment

def update_assignment(db: Session, db_assignment: Assignment, assignment_update: AssignmentUpdate):
    update_data = assignment_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_assignment, field, value)
    
    db.commit()
    db.refresh(db_assignment)
    return db_assignment

def delete_assignment(db: Session, assignment_id: int):
    db_assignment = db.query(Assignment).filter(Assignment.id == assignment_id).first()
    if db_assignment:
        db.delete(db_assignment)
        db.commit()
    return db_assignment

# Submission CRUD operations
def get_submission(db: Session, submission_id: int):
    return db.query(Submission).filter(Submission.id == submission_id).first()

def get_submissions_by_assignment(db: Session, assignment_id: int, skip: int = 0, limit: int = 100):
    return db.query(Submission).filter(Submission.assignment_id == assignment_id).offset(skip).limit(limit).all()

def get_submissions_by_student(db: Session, student_id: int, skip: int = 0, limit: int = 100):
    return db.query(Submission).filter(Submission.student_id == student_id).offset(skip).limit(limit).all()

def create_submission(db: Session, submission: SubmissionCreate):
    db_submission = Submission(**submission.dict())
    db.add(db_submission)
    db.commit()
    db.refresh(db_submission)
    return db_submission

def update_submission(db: Session, db_submission: Submission, submission_update: SubmissionUpdate):
    update_data = submission_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_submission, field, value)
    
    db.commit()
    db.refresh(db_submission)
    return db_submission

def delete_submission(db: Session, submission_id: int):
    db_submission = db.query(Submission).filter(Submission.id == submission_id).first()
    if db_submission:
        db.delete(db_submission)
        db.commit()
    return db_submission

# Grade CRUD operations
def get_grade(db: Session, grade_id: int):
    return db.query(Grade).filter(Grade.id == grade_id).first()

def get_grade_by_submission(db: Session, submission_id: int):
    return db.query(Grade).filter(Grade.submission_id == submission_id).first()

def create_grade(db: Session, grade: GradeCreate):
    db_grade = Grade(**grade.dict())
    db.add(db_grade)
    db.commit()
    db.refresh(db_grade)
    return db_grade

def update_grade(db: Session, db_grade: Grade, grade_update: GradeUpdate):
    update_data = grade_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_grade, field, value)
    
    db.commit()
    db.refresh(db_grade)
    return db_grade

def delete_grade(db: Session, grade_id: int):
    db_grade = db.query(Grade).filter(Grade.id == grade_id).first()
    if db_grade:
        db.delete(db_grade)
        db.commit()
    return db_grade

# Writing Score CRUD operations
def get_writing_score(db: Session, writing_score_id: int):
    return db.query(WritingScore).filter(WritingScore.id == writing_score_id).first()

def get_writing_score_by_submission(db: Session, submission_id: int):
    return db.query(WritingScore).filter(WritingScore.submission_id == submission_id).first()

def create_writing_score(db: Session, writing_score: WritingScoreCreate):
    db_writing_score = WritingScore(**writing_score.dict())
    db.add(db_writing_score)
    db.commit()
    db.refresh(db_writing_score)
    return db_writing_score

def delete_writing_score(db: Session, writing_score_id: int):
    db_writing_score = db.query(WritingScore).filter(WritingScore.id == writing_score_id).first()
    if db_writing_score:
        db.delete(db_writing_score)
        db.commit()
    return db_writing_score

# Speech Score CRUD operations
def get_speech_score(db: Session, speech_score_id: int):
    return db.query(SpeechScore).filter(SpeechScore.id == speech_score_id).first()

def get_speech_score_by_submission(db: Session, submission_id: int):
    return db.query(SpeechScore).filter(SpeechScore.submission_id == submission_id).first()

def create_speech_score(db: Session, speech_score: SpeechScoreCreate):
    db_speech_score = SpeechScore(**speech_score.dict())
    db.add(db_speech_score)
    db.commit()
    db.refresh(db_speech_score)
    return db_speech_score

def delete_speech_score(db: Session, speech_score_id: int):
    db_speech_score = db.query(SpeechScore).filter(SpeechScore.id == speech_score_id).first()
    if db_speech_score:
        db.delete(db_speech_score)
        db.commit()
    return db_speech_score