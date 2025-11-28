from sqlalchemy.orm import Session
from app.models.user import User, School, Class, UserClass
from app.schemas.user import UserCreate, UserUpdate, SchoolCreate, SchoolUpdate, ClassCreate, ClassUpdate
from app.core.security import get_password_hash

# User CRUD operations
def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(User).offset(skip).limit(limit).all()

def create_user(db: Session, user: UserCreate):
    db_user = User(
        email=user.email,
        username=user.username,
        first_name=user.first_name,
        last_name=user.last_name,
        role=user.role,
        school_id=user.school_id,
        hashed_password=get_password_hash(user.password)
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user(db: Session, db_user: User, user_update: UserUpdate):
    update_data = user_update.dict(exclude_unset=True)
    if "password" in update_data:
        update_data["hashed_password"] = get_password_hash(update_data.pop("password"))
    
    for field, value in update_data.items():
        setattr(db_user, field, value)
    
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: int):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user:
        db.delete(db_user)
        db.commit()
    return db_user

# School CRUD operations
def get_school(db: Session, school_id: int):
    return db.query(School).filter(School.id == school_id).first()

def get_schools(db: Session, skip: int = 0, limit: int = 100):
    return db.query(School).offset(skip).limit(limit).all()

def create_school(db: Session, school: SchoolCreate):
    db_school = School(**school.dict())
    db.add(db_school)
    db.commit()
    db.refresh(db_school)
    return db_school

def update_school(db: Session, db_school: School, school_update: SchoolUpdate):
    update_data = school_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_school, field, value)
    
    db.commit()
    db.refresh(db_school)
    return db_school

def delete_school(db: Session, school_id: int):
    db_school = db.query(School).filter(School.id == school_id).first()
    if db_school:
        db.delete(db_school)
        db.commit()
    return db_school

# Class CRUD operations
def get_class(db: Session, class_id: int):
    return db.query(Class).filter(Class.id == class_id).first()

def get_classes(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Class).offset(skip).limit(limit).all()

def create_class(db: Session, class_: ClassCreate):
    db_class = Class(**class_.dict())
    db.add(db_class)
    db.commit()
    db.refresh(db_class)
    return db_class

def update_class(db: Session, db_class: Class, class_update: ClassUpdate):
    update_data = class_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_class, field, value)
    
    db.commit()
    db.refresh(db_class)
    return db_class

def delete_class(db: Session, class_id: int):
    db_class = db.query(Class).filter(Class.id == class_id).first()
    if db_class:
        db.delete(db_class)
        db.commit()
    return db_class

def add_student_to_class(db: Session, user_id: int, class_id: int):
    user_class = UserClass(user_id=user_id, class_id=class_id)
    db.add(user_class)
    db.commit()
    return user_class

def remove_student_from_class(db: Session, user_id: int, class_id: int):
    user_class = db.query(UserClass).filter(
        UserClass.user_id == user_id,
        UserClass.class_id == class_id
    ).first()
    if user_class:
        db.delete(user_class)
        db.commit()
    return user_class