from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.user import User
from app.services.avatar import AvatarService

router = APIRouter()
avatar_service = AvatarService()

@router.post("/generate-video", response_model=dict)
async def generate_avatar_video(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    text: str,
    avatar_settings: dict = None,
):
    """
    Generate an avatar video with lip-sync using the avatar service.
    """
    try:
        # Generate avatar video using the avatar service
        video_result = await avatar_service.generate_avatar_video(text, avatar_settings)
        return video_result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/update-settings", response_model=dict)
async def update_avatar_settings(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    settings: dict,
):
    """
    Update avatar settings for the user.
    """
    try:
        # Update avatar settings using the avatar service
        updated_settings = await avatar_service.update_user_avatar_settings(current_user.id, settings)
        return updated_settings
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/settings", response_model=dict)
async def get_avatar_settings(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
):
    """
    Get avatar settings for the user.
    """
    try:
        # Get avatar settings using the avatar service
        settings = await avatar_service.get_user_avatar_settings(current_user.id)
        return settings
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/create-avatar", response_model=dict)
async def create_custom_avatar(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    avatar_data: dict,
):
    """
    Create a custom avatar for the user.
    """
    try:
        # Create custom avatar using the avatar service
        avatar_result = await avatar_service.create_custom_avatar(current_user.id, avatar_data)
        return avatar_result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))