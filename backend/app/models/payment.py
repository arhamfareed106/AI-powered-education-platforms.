from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from app.database.base import Base
from datetime import datetime

class Payment(Base):
    __tablename__ = "payments"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    school_id = Column(Integer, ForeignKey("schools.id"), nullable=True)
    stripe_payment_intent_id = Column(String, unique=True, index=True)
    amount = Column(Float, nullable=False)
    currency = Column(String, default="usd")
    status = Column(String, nullable=False)  # succeeded, failed, pending
    payment_method = Column(String)  # card, paypal, etc.
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    user = relationship("User")
    school = relationship("School")

class Subscription(Base):
    __tablename__ = "subscriptions"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    school_id = Column(Integer, ForeignKey("schools.id"), nullable=True)
    stripe_subscription_id = Column(String, unique=True, index=True)
    stripe_customer_id = Column(String, index=True)
    plan_type = Column(String, nullable=False)  # individual, school
    status = Column(String, nullable=False)  # active, canceled, past_due, unpaid
    current_period_start = Column(DateTime)
    current_period_end = Column(DateTime)
    cancel_at_period_end = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    user = relationship("User")
    school = relationship("School")

class UsageLog(Base):
    __tablename__ = "usage_logs"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    feature = Column(String, nullable=False)  # ai_chat, ai_grading, etc.
    timestamp = Column(DateTime, default=datetime.utcnow)
    metadata_json = Column(String)  # Additional data in JSON format
    
    # Relationships
    user = relationship("User")