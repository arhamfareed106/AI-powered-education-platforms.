from abc import ABC, abstractmethod
from typing import Dict, Any, Optional

class AIService(ABC):
    """Base class for all AI services"""
    
    @abstractmethod
    async def process_text(self, text: str, context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Process text input and return AI response"""
        pass
    
    @abstractmethod
    async def process_audio(self, audio_data: bytes, context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Process audio input and return transcription and AI response"""
        pass
    
    @abstractmethod
    async def generate_speech(self, text: str, context: Optional[Dict[str, Any]] = None) -> bytes:
        """Convert text to speech and return audio data"""
        pass