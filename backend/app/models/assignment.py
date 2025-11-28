from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Float, Boolean
from sqlalchemy.orm import relationship
from app.database.base import Base
from datetime import datetime

class Assignment(Base):
    __tablename__ = "assignments"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    class_id = Column(Integer, ForeignKey("classes.id"), nullable=False)
    created_by_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    due_date = Column(DateTime)
    max_points = Column(Float, default=100.0)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    class_ = relationship("Class", back_populates="assignments")
    created_by = relationship("User", back_populates="assignments")
    submissions = relationship("Submission", back_populates="assignment")

class Submission(Base):
    __tablename__ = "submissions"
    
    id = Column(Integer, primary_key=True, index=True)
    assignment_id = Column(Integer, ForeignKey("assignments.id"), nullable=False)
    student_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    content = Column(Text)  # Text submission
    audio_url = Column(String)  # Audio submission URL
    submitted_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    assignment = relationship("Assignment", back_populates="submissions")
    student = relationship("User", back_populates="submissions")
    grade = relationship("Grade", uselist=False, back_populates="submission")

class Grade(Base):
    __tablename__ = "grades"
    
    id = Column(Integer, primary_key=True, index=True)
    submission_id = Column(Integer, ForeignKey("submissions.id"), nullable=False)
    graded_by_id = Column(Integer, ForeignKey("users.id"))
    score = Column(Float)
    feedback = Column(Text)
    is_final = Column(Boolean, default=False)
    graded_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    submission = relationship("Submission", back_populates="grade")
    graded_by = relationship("User", back_populates="grades")

class WritingScore(Base):
    __tablename__ = "writing_scores"
    
    id = Column(Integer, primary_key=True, index=True)
    submission_id = Column(Integer, ForeignKey("submissions.id"), nullable=False)
    grammar_score = Column(Float)
    vocabulary_score = Column(Float)
    coherence_score = Column(Float)
    overall_score = Column(Float)
    feedback = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    submission = relationship("Submission")

class SpeechScore(Base):
    __tablename__ = "speech_scores"
    
    id = Column(Integer, primary_key=True, index=True)
    submission_id = Column(Integer, ForeignKey("submissions.id"), nullable=False)
    pronunciation_score = Column(Float)
    fluency_score = Column(Float)
    accuracy_score = Column(Float)
    overall_score = Column(Float)
    feedback = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    submission = relationship("Submission")