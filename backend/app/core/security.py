from datetime import datetime, timedelta
from typing import Optional, Dict, Any
from jose import jwt
from passlib.context import CryptContext
from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_access_token(data: Dict[Any, Any], expires_delta: Optional[timedelta] = None) -> str:
    """Create JWT access token"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire, "type": "access"})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

def create_refresh_token(data: Dict[Any, Any]) -> str:
    """Create JWT refresh token"""
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS)
    to_encode.update({"exp": expire, "type": "refresh"})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a password against a hash"""
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    """Hash a password"""
    return pwd_context.hash(password)

def sanitize_input(user_input: str) -> str:
    """
    Sanitize user input to prevent SQL injection and XSS attacks
    
    Args:
        user_input: Raw user input string
    
    Returns:
        Sanitized string safe for processing
    """
    import html
    import re
    
    if not user_input:
        return user_input
    
    # HTML escape to prevent XSS
    sanitized = html.escape(user_input)
    
    # Remove SQL injection patterns
    sql_patterns = [
        (r"';?\s*DROP\s+TABLE", ""),
        (r"';?\s*DELETE\s+FROM", ""),
        (r"';?\s*INSERT\s+INTO", ""),
        (r"';?\s*UPDATE\s+.*\s+SET", ""),
        (r"--", ""),
        (r"/\*.*\*/", ""),
        (r"UNION\s+SELECT", ""),
    ]
    
    for pattern, replacement in sql_patterns:
        sanitized = re.sub(pattern, replacement, sanitized, flags=re.IGNORECASE)
    
    # Remove dangerous JavaScript patterns
    js_patterns = [
        (r"<script[^>]*>.*?</script>", ""),
        (r"javascript:", ""),
        (r"onerror\s*=", ""),
        (r"onload\s*=", ""),
        (r"onclick\s*=", ""),
    ]
    
    for pattern, replacement in js_patterns:
        sanitized = re.sub(pattern, replacement, sanitized, flags=re.IGNORECASE | re.DOTALL)
    
    return sanitized
