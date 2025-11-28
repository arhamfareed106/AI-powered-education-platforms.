from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.payment import Payment

router = APIRouter()

@router.post("/", response_model=schemas.Payment)
def create_payment(
    *,
    db: Session = Depends(deps.get_db),
    payment_in: schemas.PaymentCreate,
) -> Payment:
    """
    Create new payment.
    """
    payment = crud.create_payment(db, payment=payment_in)
    return payment

@router.get("/{payment_id}", response_model=schemas.Payment)
def read_payment(
    *,
    db: Session = Depends(deps.get_db),
    payment_id: int,
) -> Payment:
    """
    Get a specific payment by id.
    """
    payment = crud.get_payment(db, payment_id=payment_id)
    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")
    return payment

@router.get("/user/{user_id}", response_model=list[schemas.Payment])
def read_payments_by_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
    skip: int = 0,
    limit: int = 100,
) -> list[Payment]:
    """
    Retrieve payments by user.
    """
    payments = crud.get_payments_by_user(db, user_id=user_id, skip=skip, limit=limit)
    return payments

@router.put("/{payment_id}", response_model=schemas.Payment)
def update_payment(
    *,
    db: Session = Depends(deps.get_db),
    payment_id: int,
    payment_in: schemas.PaymentUpdate,
) -> Payment:
    """
    Update a payment.
    """
    payment = crud.get_payment(db, payment_id=payment_id)
    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")
    payment = crud.update_payment(db, db_payment=payment, payment_update=payment_in)
    return payment

@router.delete("/{payment_id}", response_model=schemas.Payment)
def delete_payment(
    *,
    db: Session = Depends(deps.get_db),
    payment_id: int,
) -> Payment:
    """
    Delete a payment.
    """
    payment = crud.get_payment(db, payment_id=payment_id)
    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")
    payment = crud.delete_payment(db, payment_id=payment_id)
    return payment