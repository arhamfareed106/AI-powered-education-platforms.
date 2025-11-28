from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.payment import Subscription

router = APIRouter()

@router.post("/", response_model=schemas.Subscription)
def create_subscription(
    *,
    db: Session = Depends(deps.get_db),
    subscription_in: schemas.SubscriptionCreate,
) -> Subscription:
    """
    Create new subscription.
    """
    subscription = crud.create_subscription(db, subscription=subscription_in)
    return subscription

@router.get("/{subscription_id}", response_model=schemas.Subscription)
def read_subscription(
    *,
    db: Session = Depends(deps.get_db),
    subscription_id: int,
) -> Subscription:
    """
    Get a specific subscription by id.
    """
    subscription = crud.get_subscription(db, subscription_id=subscription_id)
    if not subscription:
        raise HTTPException(status_code=404, detail="Subscription not found")
    return subscription

@router.get("/user/{user_id}", response_model=list[schemas.Subscription])
def read_subscriptions_by_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
    skip: int = 0,
    limit: int = 100,
) -> list[Subscription]:
    """
    Retrieve subscriptions by user.
    """
    subscriptions = crud.get_subscriptions_by_user(db, user_id=user_id, skip=skip, limit=limit)
    return subscriptions

@router.get("/school/{school_id}", response_model=list[schemas.Subscription])
def read_subscriptions_by_school(
    *,
    db: Session = Depends(deps.get_db),
    school_id: int,
    skip: int = 0,
    limit: int = 100,
) -> list[Subscription]:
    """
    Retrieve subscriptions by school.
    """
    subscriptions = crud.get_subscriptions_by_school(db, school_id=school_id, skip=skip, limit=limit)
    return subscriptions

@router.put("/{subscription_id}", response_model=schemas.Subscription)
def update_subscription(
    *,
    db: Session = Depends(deps.get_db),
    subscription_id: int,
    subscription_in: schemas.SubscriptionUpdate,
) -> Subscription:
    """
    Update a subscription.
    """
    subscription = crud.get_subscription(db, subscription_id=subscription_id)
    if not subscription:
        raise HTTPException(status_code=404, detail="Subscription not found")
    subscription = crud.update_subscription(db, db_subscription=subscription, subscription_update=subscription_in)
    return subscription

@router.delete("/{subscription_id}", response_model=schemas.Subscription)
def delete_subscription(
    *,
    db: Session = Depends(deps.get_db),
    subscription_id: int,
) -> Subscription:
    """
    Delete a subscription.
    """
    subscription = crud.get_subscription(db, subscription_id=subscription_id)
    if not subscription:
        raise HTTPException(status_code=404, detail="Subscription not found")
    subscription = crud.delete_subscription(db, subscription_id=subscription_id)
    return subscription