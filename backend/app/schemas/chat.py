from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# Conversation schemas
class ConversationBase(BaseModel):
    user_id: int
    title: Optional[str] = None

class ConversationCreate(ConversationBase):
    pass

class ConversationUpdate(ConversationBase):
    user_id: Optional[int] = None
    title: Optional[str] = None

class ConversationInDBBase(ConversationBase):
    id: int
    created_at: datetime
    updated_at: datetime
    is_active: bool

    class Config:
        orm_mode = True

class Conversation(ConversationInDBBase):
    pass

# Message schemas
class MessageBase(BaseModel):
    conversation_id: int
    sender_id: int
    content: str
    message_type: Optional[str] = "text"
    audio_url: Optional[str] = None
    avatar_animation: Optional[str] = None

class MessageCreate(MessageBase):
    pass

class MessageUpdate(MessageBase):
    conversation_id: Optional[int] = None
    sender_id: Optional[int] = None
    content: Optional[str] = None

class MessageInDBBase(MessageBase):
    id: int
    timestamp: datetime

    class Config:
        orm_mode = True

class Message(MessageInDBBase):
    pass