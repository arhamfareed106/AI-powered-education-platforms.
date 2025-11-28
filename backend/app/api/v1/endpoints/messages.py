from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.chat import Message

router = APIRouter()

@router.post("/", response_model=schemas.Message)
def create_message(
    *,
    db: Session = Depends(deps.get_db),
    message_in: schemas.MessageCreate,
) -> Message:
    """
    Create new message.
    """
    message = crud.create_message(db, message=message_in)
    return message

@router.get("/{message_id}", response_model=schemas.Message)
def read_message(
    *,
    db: Session = Depends(deps.get_db),
    message_id: int,
) -> Message:
    """
    Get a specific message by id.
    """
    message = crud.get_message(db, message_id=message_id)
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    return message

@router.get("/conversation/{conversation_id}", response_model=list[schemas.Message])
def read_messages_by_conversation(
    *,
    db: Session = Depends(deps.get_db),
    conversation_id: int,
    skip: int = 0,
    limit: int = 100,
) -> list[Message]:
    """
    Retrieve messages by conversation.
    """
    messages = crud.get_messages_by_conversation(db, conversation_id=conversation_id, skip=skip, limit=limit)
    return messages

@router.put("/{message_id}", response_model=schemas.Message)
def update_message(
    *,
    db: Session = Depends(deps.get_db),
    message_id: int,
    message_in: schemas.MessageUpdate,
) -> Message:
    """
    Update a message.
    """
    message = crud.get_message(db, message_id=message_id)
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    message = crud.update_message(db, db_message=message, message_update=message_in)
    return message

@router.delete("/{message_id}", response_model=schemas.Message)
def delete_message(
    *,
    db: Session = Depends(deps.get_db),
    message_id: int,
) -> Message:
    """
    Delete a message.
    """
    message = crud.get_message(db, message_id=message_id)
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    message = crud.delete_message(db, message_id=message_id)
    return message