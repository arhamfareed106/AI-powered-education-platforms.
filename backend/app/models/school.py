from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, Boolean, Integer
from sqlalchemy.orm import relationship
from app.database.base import Base
from datetime import datetime

class School(Base):
    __tablename__ = "schools"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(Text, nullable=True)
    admin_id = Column(Integer, ForeignKey("users.id"))
    address = Column(String, nullable=True)
    city = Column(String, nullable=True)
    state = Column(String, nullable=True)
    country = Column(String, nullable=True)
    postal_code = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    website = Column(String, nullable=True)
    license_count = Column(Integer, default=0)
    license_type = Column(String, default="free")  # free, pro, premium, institutional
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    is_active = Column(Boolean, default=True)

    # Relationships
    admin = relationship("User", back_populates="administered_schools")
    classrooms = relationship("Classroom", back_populates="school")
    students = relationship("User", back_populates="school")