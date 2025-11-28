from sqlalchemy.orm import Session
from app.models.payment import Payment, Subscription, UsageLog
from app.schemas.payment import PaymentCreate, PaymentUpdate, SubscriptionCreate, SubscriptionUpdate, UsageLogCreate

# Payment CRUD operations
def get_payment(db: Session, payment_id: int):
    return db.query(Payment).filter(Payment.id == payment_id).first()

def get_payment_by_stripe_id(db: Session, stripe_payment_intent_id: str):
    return db.query(Payment).filter(Payment.stripe_payment_intent_id == stripe_payment_intent_id).first()

def get_payments_by_user(db: Session, user_id: int, skip: int = 0, limit: int = 100):
    return db.query(Payment).filter(Payment.user_id == user_id).offset(skip).limit(limit).all()

def create_payment(db: Session, payment: PaymentCreate):
    db_payment = Payment(**payment.dict())
    db.add(db_payment)
    db.commit()
    db.refresh(db_payment)
    return db_payment

def update_payment(db: Session, db_payment: Payment, payment_update: PaymentUpdate):
    update_data = payment_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_payment, field, value)
    
    db.commit()
    db.refresh(db_payment)
    return db_payment

def delete_payment(db: Session, payment_id: int):
    db_payment = db.query(Payment).filter(Payment.id == payment_id).first()
    if db_payment:
        db.delete(db_payment)
        db.commit()
    return db_payment

# Subscription CRUD operations
def get_subscription(db: Session, subscription_id: int):
    return db.query(Subscription).filter(Subscription.id == subscription_id).first()

def get_subscription_by_stripe_id(db: Session, stripe_subscription_id: str):
    return db.query(Subscription).filter(Subscription.stripe_subscription_id == stripe_subscription_id).first()

def get_subscriptions_by_user(db: Session, user_id: int, skip: int = 0, limit: int = 100):
    return db.query(Subscription).filter(Subscription.user_id == user_id).offset(skip).limit(limit).all()

def get_subscriptions_by_school(db: Session, school_id: int, skip: int = 0, limit: int = 100):
    return db.query(Subscription).filter(Subscription.school_id == school_id).offset(skip).limit(limit).all()

def create_subscription(db: Session, subscription: SubscriptionCreate):
    db_subscription = Subscription(**subscription.dict())
    db.add(db_subscription)
    db.commit()
    db.refresh(db_subscription)
    return db_subscription

def update_subscription(db: Session, db_subscription: Subscription, subscription_update: SubscriptionUpdate):
    update_data = subscription_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_subscription, field, value)
    
    db.commit()
    db.refresh(db_subscription)
    return db_subscription

def delete_subscription(db: Session, subscription_id: int):
    db_subscription = db.query(Subscription).filter(Subscription.id == subscription_id).first()
    if db_subscription:
        db.delete(db_subscription)
        db.commit()
    return db_subscription

# Usage Log CRUD operations
def get_usage_log(db: Session, usage_log_id: int):
    return db.query(UsageLog).filter(UsageLog.id == usage_log_id).first()

def get_usage_logs_by_user(db: Session, user_id: int, skip: int = 0, limit: int = 100):
    return db.query(UsageLog).filter(UsageLog.user_id == user_id).offset(skip).limit(limit).all()

def create_usage_log(db: Session, usage_log: UsageLogCreate):
    db_usage_log = UsageLog(**usage_log.dict())
    db.add(db_usage_log)
    db.commit()
    db.refresh(db_usage_log)
    return db_usage_log

def delete_usage_log(db: Session, usage_log_id: int):
    db_usage_log = db.query(UsageLog).filter(UsageLog.id == usage_log_id).first()
    if db_usage_log:
        db.delete(db_usage_log)
        db.commit()
    return db_usage_log