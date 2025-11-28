from pydantic import BaseModel
from typing import Optional
from datetime import datetime

# Payment schemas
class PaymentBase(BaseModel):
    user_id: int
    school_id: Optional[int] = None
    amount: float
    currency: Optional[str] = "usd"
    status: str
    payment_method: Optional[str] = None

class PaymentCreate(PaymentBase):
    stripe_payment_intent_id: str

class PaymentUpdate(PaymentBase):
    status: Optional[str] = None

class PaymentInDBBase(PaymentBase):
    id: int
    stripe_payment_intent_id: str
    created_at: datetime

    class Config:
        orm_mode = True

class Payment(PaymentInDBBase):
    pass

# Subscription schemas
class SubscriptionBase(BaseModel):
    user_id: Optional[int] = None
    school_id: Optional[int] = None
    stripe_customer_id: str
    plan_type: str
    status: str
    current_period_start: Optional[datetime] = None
    current_period_end: Optional[datetime] = None
    cancel_at_period_end: Optional[bool] = False

class SubscriptionCreate(SubscriptionBase):
    stripe_subscription_id: str

class SubscriptionUpdate(SubscriptionBase):
    status: Optional[str] = None
    current_period_start: Optional[datetime] = None
    current_period_end: Optional[datetime] = None
    cancel_at_period_end: Optional[bool] = None

class SubscriptionInDBBase(SubscriptionBase):
    id: int
    stripe_subscription_id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

class Subscription(SubscriptionInDBBase):
    pass

# Usage Log schemas
class UsageLogBase(BaseModel):
    user_id: int
    feature: str
    metadata_json: Optional[str] = None

class UsageLogCreate(UsageLogBase):
    pass

class UsageLogInDBBase(UsageLogBase):
    id: int
    timestamp: datetime

    class Config:
        orm_mode = True

class UsageLog(UsageLogInDBBase):
    pass