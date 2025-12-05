from typing import Optional
from pydantic import BaseModel

class Token(BaseModel):
    access_token: str
    refresh_token: Optional[str] = None
    token_type: str = "bearer"

class TokenPayload(BaseModel):
    user_id: Optional[int] = None
    role: Optional[str] = None
    exp: Optional[int] = None
