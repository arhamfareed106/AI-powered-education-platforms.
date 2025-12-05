from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship
from app.database.base import Base
from datetime import datetime
from enum import Enum as PyEnum

class UserRole(str, PyEnum):
    STUDENT = "student"
    TEACHER = "teacher"
    SCHOOL_ADMIN = "school_admin"
    SUPER_ADMIN = "super_admin"

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    role = Column(Enum(UserRole), nullable=False)
    school_id = Column(Integer, ForeignKey("schools.id"), nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    school = relationship("School", back_populates="users")
    classes = relationship("Class", secondary="user_classes", back_populates="students")
    assignments = relationship("Assignment", back_populates="created_by")
    submissions = relationship("Submission", back_populates="student")
    grades = relationship("Grade", back_populates="graded_by")
    sessions = relationship("Session", back_populates="user")
    progress = relationship("Progress", back_populates="user", uselist=False)
    subscription = relationship("Subscription", back_populates="user", uselist=False)

class School(Base):
    __tablename__ = "schools"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    address = Column(String)
    contact_email = Column(String)
    license_count = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    users = relationship("User", back_populates="school")
    classes = relationship("Class", back_populates="school")

class Class(Base):
    __tablename__ = "classes"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    school_id = Column(Integer, ForeignKey("schools.id"), nullable=False)
    teacher_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    school = relationship("School", back_populates="classes")
    teacher = relationship("User")
    students = relationship("User", secondary="user_classes", back_populates="classes")
    assignments = relationship("Assignment", back_populates="class_")

# Association table for many-to-many relationship between users and classes
class UserClass(Base):
    __tablename__ = "user_classes"
    
    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    class_id = Column(Integer, ForeignKey("classes.id"), primary_key=True)