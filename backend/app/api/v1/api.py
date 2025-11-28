from fastapi import APIRouter
from app.api.v1.endpoints import auth, users, schools, classes, assignments, submissions, grades, conversations, messages, payments, subscriptions, ai

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(schools.router, prefix="/schools", tags=["schools"])
api_router.include_router(classes.router, prefix="/classes", tags=["classes"])
api_router.include_router(assignments.router, prefix="/assignments", tags=["assignments"])
api_router.include_router(submissions.router, prefix="/submissions", tags=["submissions"])
api_router.include_router(grades.router, prefix="/grades", tags=["grades"])
api_router.include_router(conversations.router, prefix="/conversations", tags=["conversations"])
api_router.include_router(messages.router, prefix="/messages", tags=["messages"])
api_router.include_router(payments.router, prefix="/payments", tags=["payments"])
api_router.include_router(subscriptions.router, prefix="/subscriptions", tags=["subscriptions"])
api_router.include_router(ai.router, prefix="/ai", tags=["ai"])