from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.chat import Conversation

router = APIRouter()

@router.post("/", response_model=schemas.Conversation)
def create_conversation(
    *,
    db: Session = Depends(deps.get_db),
    conversation_in: schemas.ConversationCreate,
) -> Conversation:
    """
    Create new conversation.
    """
    conversation = crud.create_conversation(db, conversation=conversation_in)
    return conversation

@router.get("/{conversation_id}", response_model=schemas.Conversation)
def read_conversation(
    *,
    db: Session = Depends(deps.get_db),
    conversation_id: int,
) -> Conversation:
    """
    Get a specific conversation by id.
    """
    conversation = crud.get_conversation(db, conversation_id=conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")
    return conversation

@router.get("/user/{user_id}", response_model=list[schemas.Conversation])
def read_conversations_by_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
    skip: int = 0,
    limit: int = 100,
) -> list[Conversation]:
    """
    Retrieve conversations by user.
    """
    conversations = crud.get_conversations_by_user(db, user_id=user_id, skip=skip, limit=limit)
    return conversations

@router.put("/{conversation_id}", response_model=schemas.Conversation)
def update_conversation(
    *,
    db: Session = Depends(deps.get_db),
    conversation_id: int,
    conversation_in: schemas.ConversationUpdate,
) -> Conversation:
    """
    Update a conversation.
    """
    conversation = crud.get_conversation(db, conversation_id=conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")
    conversation = crud.update_conversation(db, db_conversation=conversation, conversation_update=conversation_in)
    return conversation

@router.delete("/{conversation_id}", response_model=schemas.Conversation)
def delete_conversation(
    *,
    db: Session = Depends(deps.get_db),
    conversation_id: int,
) -> Conversation:
    """
    Delete a conversation.
    """
    conversation = crud.get_conversation(db, conversation_id=conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")
    conversation = crud.delete_conversation(db, conversation_id=conversation_id)
    return conversation