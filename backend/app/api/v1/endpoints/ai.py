from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.user import User
from app.models.chat import Message
from app.services.ai import FluentixAIService
from app.services.avatar import AvatarService
import json

router = APIRouter()
ai_service = FluentixAIService()
avatar_service = AvatarService()

@router.post("/chat", response_model=schemas.Message)
async def ai_chat(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    message_in: schemas.MessageCreate,
) -> Message:
    """
    AI chat endpoint - process text conversation with AI tutor.
    """
    # Create user message
    user_message = crud.create_message(db, message=message_in)
    
    # Process with AI service
    ai_context = {
        "user_id": current_user.id,
        "conversation_id": message_in.conversation_id,
        "user_role": current_user.role
    }
    
    ai_response = await ai_service.process_text(message_in.content, ai_context)
    
    # Create AI response message
    ai_message_in = schemas.MessageCreate(
        conversation_id=message_in.conversation_id,
        sender_id=0,  # System/AI sender
        content=ai_response["text"],
        message_type="text"
    )
    
    ai_message = crud.create_message(db, message=ai_message_in)
    
    return ai_message

@router.post("/audio", response_model=schemas.Message)
async def ai_audio(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    audio_data: dict,  # In practice, this would be audio file data
) -> Message:
    """
    AI audio endpoint - process speech-to-text conversion.
    """
    # Extract audio bytes (in practice, this would come from uploaded file)
    audio_bytes = audio_data.get("audio_bytes", b"")
    
    # Process with AI service
    ai_context = {
        "user_id": current_user.id,
        "conversation_id": audio_data.get("conversation_id", 1),
        "user_role": current_user.role
    }
    
    audio_result = await ai_service.process_audio(audio_bytes, ai_context)
    
    # Create message with transcription
    message_in = schemas.MessageCreate(
        conversation_id=audio_data.get("conversation_id", 1),
        sender_id=current_user.id,
        content=audio_result["transcription"],
        message_type="audio"
    )
    
    message = crud.create_message(db, message=message_in)
    
    return message

@router.post("/speak", response_model=dict)
async def ai_speak(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    text_data: dict,
) -> dict:
    """
    AI speak endpoint - convert text to speech.
    """
    text = text_data.get("text", "")
    
    # Process with AI service
    ai_context = {
        "user_id": current_user.id,
        "user_role": current_user.role
    }
    
    audio_bytes = await ai_service.generate_speech(text, ai_context)
    
    # In a real implementation, you would save the audio file and return a URL
    return {
        "message": "Text-to-speech conversion successful",
        "audio_url": "https://example.com/generated-audio.mp3",
        "text": text
    }

@router.post("/avatar", response_model=dict)
async def ai_avatar(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    avatar_data: dict,
) -> dict:
    """
    AI avatar endpoint - generate avatar animation instructions.
    """
    text = avatar_data.get("text", "")
    audio_bytes = avatar_data.get("audio_bytes", b"")
    
    # Process with avatar service
    avatar_context = {
        "user_id": current_user.id,
        "user_role": current_user.role
    }
    
    avatar_result = await avatar_service.generate_avatar_animation(text, audio_bytes, avatar_context)
    
    return {
        "message": "Avatar animation instructions generated",
        "video_url": avatar_result["video_url"],
        "duration": avatar_result["duration"],
        "avatar_id": avatar_result["avatar_id"]
    }

@router.post("/grade/writing", response_model=schemas.WritingScore)
async def ai_grade_writing(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    writing_data: dict,
) -> schemas.WritingScore:
    """
    AI writing grading endpoint.
    """
    # Process with AI service for writing evaluation
    ai_context = {
        "user_id": current_user.id,
        "assignment_id": writing_data.get("assignment_id"),
        "user_role": current_user.role
    }
    
    # In a real implementation, this would use the AI service to evaluate writing quality
    # For now, we'll simulate grading
    writing_score_in = schemas.WritingScoreCreate(
        submission_id=writing_data.get("submission_id", 1),
        grammar_score=8.5,
        vocabulary_score=9.0,
        coherence_score=8.0,
        overall_score=8.5,
        feedback="¡Buen trabajo! Tu gramática es bastante buena. Podrías mejorar usando un vocabulario más variado."
    )
    
    writing_score = crud.create_writing_score(db, writing_score=writing_score_in)
    
    return writing_score

@router.post("/grade/speaking", response_model=schemas.SpeechScore)
async def ai_grade_speaking(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    speaking_data: dict,
) -> schemas.SpeechScore:
    """
    AI speaking grading endpoint.
    """
    # Process with AI service for speaking evaluation
    ai_context = {
        "user_id": current_user.id,
        "assignment_id": speaking_data.get("assignment_id"),
        "user_role": current_user.role
    }
    
    # In a real implementation, this would use the AI service to evaluate speaking quality
    # For now, we'll simulate grading
    speech_score_in = schemas.SpeechScoreCreate(
        submission_id=speaking_data.get("submission_id", 1),
        pronunciation_score=8.0,
        fluency_score=7.5,
        accuracy_score=8.5,
        overall_score=8.0,
        feedback="Tu pronunciación es clara. Trabaja en la fluidez para sonar más natural."
    )
    
    speech_score = crud.create_speech_score(db, speech_score=speech_score_in)
    
    return speech_score