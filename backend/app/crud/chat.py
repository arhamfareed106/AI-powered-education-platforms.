from sqlalchemy.orm import Session
from app.models.chat import Conversation, Message
from app.schemas.chat import ConversationCreate, ConversationUpdate, MessageCreate, MessageUpdate

# Conversation CRUD operations
def get_conversation(db: Session, conversation_id: int):
    return db.query(Conversation).filter(Conversation.id == conversation_id).first()

def get_conversations_by_user(db: Session, user_id: int, skip: int = 0, limit: int = 100):
    return db.query(Conversation).filter(Conversation.user_id == user_id).offset(skip).limit(limit).all()

def create_conversation(db: Session, conversation: ConversationCreate):
    db_conversation = Conversation(**conversation.dict())
    db.add(db_conversation)
    db.commit()
    db.refresh(db_conversation)
    return db_conversation

def update_conversation(db: Session, db_conversation: Conversation, conversation_update: ConversationUpdate):
    update_data = conversation_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_conversation, field, value)
    
    db.commit()
    db.refresh(db_conversation)
    return db_conversation

def delete_conversation(db: Session, conversation_id: int):
    db_conversation = db.query(Conversation).filter(Conversation.id == conversation_id).first()
    if db_conversation:
        db.delete(db_conversation)
        db.commit()
    return db_conversation

# Message CRUD operations
def get_message(db: Session, message_id: int):
    return db.query(Message).filter(Message.id == message_id).first()

def get_messages_by_conversation(db: Session, conversation_id: int, skip: int = 0, limit: int = 100):
    return db.query(Message).filter(Message.conversation_id == conversation_id).offset(skip).limit(limit).all()

def create_message(db: Session, message: MessageCreate):
    db_message = Message(**message.dict())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message

def update_message(db: Session, db_message: Message, message_update: MessageUpdate):
    update_data = message_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_message, field, value)
    
    db.commit()
    db.refresh(db_message)
    return db_message

def delete_message(db: Session, message_id: int):
    db_message = db.query(Message).filter(Message.id == message_id).first()
    if db_message:
        db.delete(db_message)
        db.commit()
    return db_message