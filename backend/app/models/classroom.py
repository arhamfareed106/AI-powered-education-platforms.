from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, Boolean
from sqlalchemy.orm import relationship
from app.database.base import Base
from datetime import datetime

class Classroom(Base):
    __tablename__ = "classrooms"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(Text, nullable=True)
    teacher_id = Column(Integer, ForeignKey("users.id"))
    school_id = Column(Integer, ForeignKey("schools.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    is_active = Column(Boolean, default=True)

    # Relationships
    teacher = relationship("User", back_populates="classrooms")
    school = relationship("School", back_populates="classrooms")
    assignments = relationship("Assignment", back_populates="classroom")
    student_enrollments = relationship("StudentEnrollment", back_populates="classroom")

class StudentEnrollment(Base):
    __tablename__ = "student_enrollments"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"))
    classroom_id = Column(Integer, ForeignKey("classrooms.id"))
    enrolled_at = Column(DateTime, default=datetime.utcnow)
    is_active = Column(Boolean, default=True)

    # Relationships
    student = relationship("User", back_populates="enrollments")
    classroom = relationship("Classroom", back_populates="student_enrollments")