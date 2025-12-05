from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, Boolean, Float
from sqlalchemy.orm import relationship
from app.database.base import Base
from datetime import datetime

class StudentProgress(Base):
    __tablename__ = "student_progress"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"))
    assignment_id = Column(Integer, ForeignKey("assignments.id"), nullable=True)
    exam_id = Column(Integer, ForeignKey("exams.id"), nullable=True)
    skill = Column(String, index=True)  # e.g., "pronunciation", "grammar", "vocabulary"
    score = Column(Float, default=0.0)
    feedback = Column(Text, nullable=True)
    metadata_ = Column(Text, nullable=True)  # Store additional data as JSON string
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    student = relationship("User", back_populates="progress_records")
    assignment = relationship("Assignment", back_populates="progress_records")
    exam = relationship("Exam", back_populates="progress_records")

class SkillAssessment(Base):
    __tablename__ = "skill_assessments"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"))
    skill = Column(String, index=True)  # e.g., "pronunciation", "grammar", "vocabulary"
    level = Column(String)  # e.g., "beginner", "intermediate", "advanced"
    assessment_date = Column(DateTime, default=datetime.utcnow)
    score = Column(Float, default=0.0)
    details = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    student = relationship("User", back_populates="skill_assessments")