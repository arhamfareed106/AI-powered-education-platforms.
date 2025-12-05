"""
Session and Progress tracking models
"""
from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Float, JSON
from sqlalchemy.orm import relationship
from app.database.base import Base
from datetime import datetime

class Session(Base):
    """AI Tutor session model"""
    __tablename__ = "sessions"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    session_type = Column(String, nullable=False)  # practice, exam, assignment
    start_time = Column(DateTime, default=datetime.utcnow)
    end_time = Column(DateTime, nullable=True)
    duration_seconds = Column(Integer, default=0)
    overall_score = Column(Float, nullable=True)
    transcript = Column(Text, nullable=True)
    feedback = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="sessions")

class Progress(Base):
    """User progress tracking model"""
    __tablename__ = "progress"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, unique=True)
    
    # Skill scores (0-100)
    speaking_score = Column(Float, default=0.0)
    reading_score = Column(Float, default=0.0)
    listening_score = Column(Float, default=0.0)
    writing_score = Column(Float, default=0.0)
    
    # CEFR levels
    speaking_level = Column(String, default="A1")  # A1, A2, B1, B2, C1, C2
    reading_level = Column(String, default="A1")
    listening_level = Column(String, default="A1")
    writing_level = Column(String, default="A1")
    
    # Metrics
    total_points = Column(Integer, default=0)
    daily_streak = Column(Integer, default=0)
    total_study_time_minutes = Column(Integer, default=0)
    vocabulary_count = Column(Integer, default=0)
    
    # Progress percentages
    vocabulary_progress = Column(Float, default=0.0)
    grammar_progress = Column(Float, default=0.0)
    speaking_progress = Column(Float, default=0.0)
    ib_spanish_progress = Column(Float, default=0.0)
    
    last_activity = Column(DateTime, default=datetime.utcnow)
    last_updated = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="progress")

class Conversation(Base):
    """Conversation history model"""
    __tablename__ = "conversations"
    
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(Integer, ForeignKey("sessions.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    session = relationship("Session")
    user = relationship("User")
    messages = relationship("Message", back_populates="conversation", cascade="all, delete-orphan")

class Message(Base):
    """Individual message in a conversation"""
    __tablename__ = "messages"
    
    id = Column(Integer, primary_key=True, index=True)
    conversation_id = Column(Integer, ForeignKey("conversations.id"), nullable=False)
    role = Column(String, nullable=False)  # user, assistant, system
    content = Column(Text, nullable=False)
    audio_url = Column(String, nullable=True)
    message_metadata = Column(JSON, nullable=True)  # scores, feedback, etc.
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    conversation = relationship("Conversation", back_populates="messages")
