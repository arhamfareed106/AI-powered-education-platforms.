from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
from app.models.user import UserRole

# Shared properties
class UserBase(BaseModel):
    email: EmailStr
    username: str
    first_name: str
    last_name: str
    role: UserRole
    school_id: Optional[int] = None

# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str

# Properties to receive via API on update
class UserUpdate(UserBase):
    password: Optional[str] = None

# Properties shared by models stored in DB
class UserInDBBase(UserBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

# Properties to return to client
class User(UserInDBBase):
    pass

# Properties stored in DB
class UserInDB(UserInDBBase):
    hashed_password: str

# School schemas
class SchoolBase(BaseModel):
    name: str
    address: Optional[str] = None
    contact_email: Optional[EmailStr] = None
    license_count: Optional[int] = 0

class SchoolCreate(SchoolBase):
    pass

class SchoolUpdate(SchoolBase):
    name: Optional[str] = None

class SchoolInDBBase(SchoolBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

class School(SchoolInDBBase):
    pass

# Class schemas
class ClassBase(BaseModel):
    name: str
    school_id: int
    teacher_id: int

class ClassCreate(ClassBase):
    pass

class ClassUpdate(ClassBase):
    name: Optional[str] = None
    school_id: Optional[int] = None
    teacher_id: Optional[int] = None

class ClassInDBBase(ClassBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

class Class(ClassInDBBase):
    pass

# Token schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    user_id: Optional[int] = None
    role: Optional[UserRole] = None