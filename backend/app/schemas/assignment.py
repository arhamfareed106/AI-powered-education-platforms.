from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from app.schemas.user import User

# Assignment schemas
class AssignmentBase(BaseModel):
    title: str
    description: Optional[str] = None
    class_id: int
    due_date: Optional[datetime] = None
    max_points: Optional[float] = 100.0

class AssignmentCreate(AssignmentBase):
    pass

class AssignmentUpdate(AssignmentBase):
    title: Optional[str] = None
    class_id: Optional[int] = None

class AssignmentInDBBase(AssignmentBase):
    id: int
    created_by_id: int
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

class Assignment(AssignmentInDBBase):
    pass

# Submission schemas
class SubmissionBase(BaseModel):
    assignment_id: int
    student_id: int
    content: Optional[str] = None
    audio_url: Optional[str] = None

class SubmissionCreate(SubmissionBase):
    pass

class SubmissionUpdate(SubmissionBase):
    assignment_id: Optional[int] = None
    student_id: Optional[int] = None

class SubmissionInDBBase(SubmissionBase):
    id: int
    submitted_at: datetime

    class Config:
        orm_mode = True

class Submission(SubmissionInDBBase):
    pass

# Grade schemas
class GradeBase(BaseModel):
    submission_id: int
    graded_by_id: Optional[int] = None
    score: Optional[float] = None
    feedback: Optional[str] = None
    is_final: Optional[bool] = False

class GradeCreate(GradeBase):
    pass

class GradeUpdate(GradeBase):
    submission_id: Optional[int] = None

class GradeInDBBase(GradeBase):
    id: int
    graded_at: datetime

    class Config:
        orm_mode = True

class Grade(GradeInDBBase):
    pass

# Writing Score schemas
class WritingScoreBase(BaseModel):
    submission_id: int
    grammar_score: Optional[float] = None
    vocabulary_score: Optional[float] = None
    coherence_score: Optional[float] = None
    overall_score: Optional[float] = None
    feedback: Optional[str] = None

class WritingScoreCreate(WritingScoreBase):
    pass

class WritingScoreInDBBase(WritingScoreBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

class WritingScore(WritingScoreInDBBase):
    pass

# Speech Score schemas
class SpeechScoreBase(BaseModel):
    submission_id: int
    pronunciation_score: Optional[float] = None
    fluency_score: Optional[float] = None
    accuracy_score: Optional[float] = None
    overall_score: Optional[float] = None
    feedback: Optional[str] = None

class SpeechScoreCreate(SpeechScoreBase):
    pass

class SpeechScoreInDBBase(SpeechScoreBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

class SpeechScore(SpeechScoreInDBBase):
    pass