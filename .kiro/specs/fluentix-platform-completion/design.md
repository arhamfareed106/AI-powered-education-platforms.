# Design Document

## Overview

Fluentix is a full-stack AI-powered Spanish learning platform built with Next.js 14 (App Router) for the frontend and FastAPI for the backend. The system provides interactive AI tutoring with voice recognition, real-time pronunciation feedback, grammar evaluation, assignment management, and comprehensive analytics. The architecture follows clean separation of concerns with modular services, role-based access control, and scalable infrastructure.

The platform serves three primary user roles:
- **Students**: Access AI tutoring, complete assignments, track progress
- **Teachers**: Manage classes, create assignments, grade work, view analytics
- **School Admins**: Manage school settings, users, and license allocation

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer                             │
│  Next.js 14 App Router + React + TypeScript + TailwindCSS   │
│  Zustand (State) + Axios (HTTP) + Framer Motion (Animation) │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTPS/WSS
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                     API Gateway                              │
│                  Nginx (Reverse Proxy)                       │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                  Application Layer                           │
│              FastAPI + Python 3.11+                          │
│  ┌──────────────┬──────────────┬──────────────────────┐    │
│  │ Auth Service │ AI Services  │ Business Logic       │    │
│  │ - JWT        │ - Speech     │ - Assignments        │    │
│  │ - RBAC       │ - Grammar    │ - Classes            │    │
│  │              │ - Avatar     │ - Grading            │    │
│  └──────────────┴──────────────┴──────────────────────┘    │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
┌──────────────┐ ┌──────────┐ ┌────────────────┐
│  PostgreSQL  │ │  Redis   │ │  External APIs │
│  (Primary DB)│ │  (Cache) │ │  - OpenAI      │
│              │ │          │ │  - Stripe      │
│              │ │          │ │  - Whisper     │
└──────────────┘ └──────────┘ └────────────────┘
```

### Technology Stack

**Frontend:**
- Next.js 14 with App Router
- TypeScript for type safety
- TailwindCSS for styling
- Framer Motion for animations
- Zustand for state management
- Axios for API communication
- React Hot Toast for notifications

**Backend:**
- FastAPI (Python 3.11+)
- SQLAlchemy ORM
- Alembic for migrations
- Pydantic for validation
- JWT for authentication
- Redis for caching and sessions

**Infrastructure:**
- PostgreSQL for primary database
- Redis for caching and real-time features
- Nginx for reverse proxy and load balancing
- Docker for containerization
- Docker Compose for local development

**External Services:**
- OpenAI GPT-4 for conversational AI
- Whisper for speech-to-text
- Stripe for payments
- SMTP for email notifications

## Components and Interfaces

### Frontend Components

#### 1. Authentication Components
- **LoginPage**: Email/password login with validation
- **SignupPage**: Multi-step registration with role selection
- **ForgotPasswordPage**: Password reset request
- **ResetPasswordPage**: New password entry with token validation

#### 2. Dashboard Components
- **StudentDashboard**: Progress overview, skills breakdown, leaderboard, upcoming tasks
- **TeacherDashboard**: Class overview, recent submissions, analytics summary
- **SchoolAdminDashboard**: School stats, user management, license tracking

#### 3. AI Tutor Components
- **AITutorPage**: Main interface for voice interaction
- **AudioRecorder**: Microphone input with waveform visualization
- **AvatarDisplay**: Animated AI tutor with lip-sync
- **TranscriptionDisplay**: Real-time speech-to-text output
- **FeedbackPanel**: Pronunciation and grammar feedback
- **SessionComplete**: Post-session summary with scores and recommendations

#### 4. Assignment Components
- **AssignmentList**: Display all assignments with filters
- **AssignmentDetail**: View assignment details and submit work
- **AssignmentCreator**: Teacher interface for creating assignments
- **SubmissionGrader**: Teacher interface for grading submissions
- **GradeDisplay**: Student view of grades and feedback

#### 5. Class Management Components
- **ClassList**: Display all classes
- **ClassDetail**: View class roster and assignments
- **ClassCreator**: Create new class
- **StudentEnrollment**: Add/remove students from class

#### 6. Analytics Components
- **ProgressChart**: Visual representation of skill progress
- **PerformanceMetrics**: Detailed statistics and trends
- **LeaderboardWidget**: Class rankings
- **SkillBreakdown**: Individual skill scores with CEFR levels

#### 7. Subscription Components
- **PricingSection**: Display subscription plans
- **CheckoutPage**: Stripe checkout integration
- **SubscriptionManager**: View and manage current subscription

### Backend API Endpoints

#### Authentication Endpoints (`/api/v1/auth`)
```python
POST   /auth/register          # Register new user
POST   /auth/login             # Login and get tokens
POST   /auth/refresh           # Refresh access token
POST   /auth/logout            # Logout and invalidate tokens
POST   /auth/forgot-password   # Request password reset
POST   /auth/reset-password    # Reset password with token
GET    /auth/verify-email      # Verify email address
```

#### User Endpoints (`/api/v1/users`)
```python
GET    /users/me               # Get current user profile
PUT    /users/me               # Update current user profile
GET    /users/{id}             # Get user by ID (admin/teacher)
GET    /users                  # List users (admin/teacher)
DELETE /users/{id}             # Deactivate user (admin)
```

#### AI Tutor Endpoints (`/api/v1/ai`)
```python
POST   /ai/transcribe          # Transcribe audio to text
POST   /ai/evaluate-speech     # Evaluate pronunciation
POST   /ai/check-grammar       # Check grammar
POST   /ai/chat                # Chat with AI tutor
POST   /ai/generate-response   # Generate AI response
WS     /ai/session             # WebSocket for real-time session
```

#### Assignment Endpoints (`/api/v1/assignments`)
```python
POST   /assignments            # Create assignment (teacher)
GET    /assignments            # List assignments
GET    /assignments/{id}       # Get assignment details
PUT    /assignments/{id}       # Update assignment (teacher)
DELETE /assignments/{id}       # Delete assignment (teacher)
```

#### Submission Endpoints (`/api/v1/submissions`)
```python
POST   /submissions            # Submit assignment (student)
GET    /submissions            # List submissions
GET    /submissions/{id}       # Get submission details
PUT    /submissions/{id}/grade # Grade submission (teacher)
```

#### Class Endpoints (`/api/v1/classes`)
```python
POST   /classes                # Create class (teacher/admin)
GET    /classes                # List classes
GET    /classes/{id}           # Get class details
PUT    /classes/{id}           # Update class
POST   /classes/{id}/students  # Add students to class
DELETE /classes/{id}/students/{student_id} # Remove student
```

#### Payment Endpoints (`/api/v1/payments`)
```python
POST   /payments/create-checkout-session  # Create Stripe session
POST   /payments/webhook                  # Stripe webhook handler
GET    /payments/history                  # Payment history
```

#### Subscription Endpoints (`/api/v1/subscriptions`)
```python
GET    /subscriptions/plans    # List available plans
POST   /subscriptions/subscribe # Subscribe to plan
PUT    /subscriptions/upgrade  # Upgrade subscription
POST   /subscriptions/cancel   # Cancel subscription
GET    /subscriptions/current  # Get current subscription
```

#### Analytics Endpoints (`/api/v1/analytics`)
```python
GET    /analytics/student/{id}        # Student analytics
GET    /analytics/class/{id}          # Class analytics
GET    /analytics/school/{id}         # School analytics
GET    /analytics/progress/{user_id}  # Progress tracking
```

## Data Models

### User Model
```python
class User:
    id: int
    email: str (unique, indexed)
    username: str (unique, indexed)
    hashed_password: str
    first_name: str
    last_name: str
    role: UserRole (student, teacher, school_admin, super_admin)
    school_id: int (nullable, foreign key)
    subscription_tier: str (free, pro, premium, enterprise)
    is_active: bool
    email_verified: bool
    created_at: datetime
    updated_at: datetime
```

### School Model
```python
class School:
    id: int
    name: str
    address: str
    contact_email: str
    license_count: int
    active_licenses: int
    subscription_tier: str
    created_at: datetime
    updated_at: datetime
```

### Class Model
```python
class Class:
    id: int
    name: str
    school_id: int (foreign key)
    teacher_id: int (foreign key)
    description: str
    is_active: bool
    created_at: datetime
    updated_at: datetime
```

### Assignment Model
```python
class Assignment:
    id: int
    title: str
    description: text
    class_id: int (foreign key)
    created_by_id: int (foreign key)
    due_date: datetime
    max_points: float
    assignment_type: str (speaking, writing, reading, listening)
    is_active: bool
    created_at: datetime
    updated_at: datetime
```

### Submission Model
```python
class Submission:
    id: int
    assignment_id: int (foreign key)
    student_id: int (foreign key)
    content: text (nullable)
    audio_url: str (nullable)
    video_url: str (nullable)
    submitted_at: datetime
    status: str (submitted, graded, returned)
```

### Grade Model
```python
class Grade:
    id: int
    submission_id: int (foreign key)
    graded_by_id: int (foreign key)
    score: float
    feedback: text
    rubric_scores: json
    is_final: bool
    graded_at: datetime
```

### Session Model
```python
class Session:
    id: int
    user_id: int (foreign key)
    session_type: str (practice, exam, assignment)
    start_time: datetime
    end_time: datetime
    duration_seconds: int
    overall_score: float
    transcript: text
    feedback: json
```

### Progress Model
```python
class Progress:
    id: int
    user_id: int (foreign key)
    skill_type: str (speaking, reading, listening, writing)
    current_level: str (A1, A2, B1, B2, C1, C2)
    score: float
    total_practice_time: int
    last_updated: datetime
```

### Subscription Model
```python
class Subscription:
    id: int
    user_id: int (foreign key)
    plan_id: str
    stripe_subscription_id: str
    status: str (active, canceled, past_due)
    current_period_start: datetime
    current_period_end: datetime
    cancel_at_period_end: bool
    created_at: datetime
    updated_at: datetime
```

## Error Handling

### Error Response Format
All API errors follow a consistent format:
```json
{
  "detail": "Error message",
  "error_code": "ERROR_CODE",
  "status_code": 400,
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Error Categories

1. **Authentication Errors (401)**
   - Invalid credentials
   - Expired token
   - Missing token
   - Invalid refresh token

2. **Authorization Errors (403)**
   - Insufficient permissions
   - Role mismatch
   - Resource access denied

3. **Validation Errors (422)**
   - Invalid input format
   - Missing required fields
   - Data type mismatch

4. **Not Found Errors (404)**
   - Resource not found
   - User not found
   - Assignment not found

5. **Business Logic Errors (400)**
   - Assignment already submitted
   - Subscription limit reached
   - Invalid operation

6. **Server Errors (500)**
   - Database connection failed
   - External API error
   - Unexpected error

### Frontend Error Handling

- Display user-friendly error messages using React Hot Toast
- Log errors to console in development
- Send error reports to monitoring service in production
- Implement retry logic for transient failures
- Provide fallback UI for critical errors

### Backend Error Handling

- Use FastAPI exception handlers for consistent responses
- Log all errors with context (user ID, request ID, timestamp)
- Implement circuit breakers for external API calls
- Use database transactions with rollback on error
- Rate limit error-prone endpoints

## Testing Strategy

### Unit Testing

**Backend Unit Tests:**
- Test individual service methods (speech_service, grammar_service, avatar_service)
- Test CRUD operations for each model
- Test authentication and authorization logic
- Test input validation and sanitization
- Test error handling and edge cases

**Frontend Unit Tests:**
- Test individual React components with React Testing Library
- Test state management logic (Zustand stores)
- Test utility functions and helpers
- Test form validation logic
- Test API client methods

### Property-Based Testing

Property-based testing will be implemented using **Hypothesis** for Python backend tests. Each property test will run a minimum of 100 iterations with randomly generated inputs.

All property-based tests must include a comment tag in this format:
```python
# Feature: fluentix-platform-completion, Property {number}: {property_text}
```

Property tests will verify universal properties that should hold across all inputs, complementing unit tests which verify specific examples.

### Integration Testing

- Test complete API workflows (register → login → create assignment → submit → grade)
- Test authentication flow with token refresh
- Test payment flow with Stripe test mode
- Test WebSocket connections for real-time features
- Test database transactions and rollbacks

### End-to-End Testing

- Test critical user journeys from frontend to backend
- Test student workflow: login → AI tutor session → view feedback
- Test teacher workflow: login → create assignment → grade submissions
- Test subscription workflow: select plan → checkout → access premium features

### Performance Testing

- Load test API endpoints with concurrent requests
- Test database query performance with large datasets
- Test WebSocket scalability with multiple concurrent sessions
- Monitor memory usage and response times

### Security Testing

- Test authentication bypass attempts
- Test SQL injection prevention
- Test XSS prevention in user inputs
- Test CSRF protection
- Test rate limiting effectiveness
- Test role-based access control enforcement



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Authentication and Authorization Properties

**Property 1: User registration creates accounts with correct roles**
*For any* valid registration data (email, password, name, role), creating a user account should result in a user record with the specified role and hashed password.
**Validates: Requirements 1.1**

**Property 2: Valid credentials produce authentication tokens**
*For any* registered user with valid credentials, login should return both access and refresh tokens that can be verified.
**Validates: Requirements 1.2**

**Property 3: Token refresh extends authentication**
*For any* valid refresh token, requesting a new access token should succeed and the new token should authenticate the same user.
**Validates: Requirements 1.3**

**Property 4: Password reset generates secure tokens**
*For any* registered user email, requesting password reset should generate a unique, time-limited token that can be used exactly once.
**Validates: Requirements 1.4**

**Property 5: Protected routes enforce authorization**
*For any* protected route and user role, access should be granted only if the user's role has permission for that route.
**Validates: Requirements 1.5**

**Property 6: Logout invalidates tokens**
*For any* authenticated user, after logout, their access and refresh tokens should no longer authenticate successfully.
**Validates: Requirements 1.6**

### AI Services Properties

**Property 7: Speech transcription produces text output**
*For any* valid audio input, the speech service should return transcribed text with a confidence score.
**Validates: Requirements 2.1**

**Property 8: Pronunciation evaluation includes scores**
*For any* transcribed audio, pronunciation evaluation should return scores for pronunciation, fluency, and accuracy.
**Validates: Requirements 2.2**

**Property 9: Grammar analysis provides feedback**
*For any* Spanish text input, grammar checking should return a list of errors (possibly empty) and suggestions.
**Validates: Requirements 2.3**

**Property 10: AI tutor generates contextual responses**
*For any* user message in a session, the avatar service should generate a Spanish response that references the conversation context.
**Validates: Requirements 2.4**

**Property 11: Session context is preserved**
*For any* sequence of messages in a session, each AI response should have access to all previous messages in that session.
**Validates: Requirements 2.5**

**Property 12: Completed sessions are persisted**
*For any* completed AI tutor session, the system should store session data including transcript, scores, and feedback that can be retrieved later.
**Validates: Requirements 2.6**

### Assignment Management Properties

**Property 13: Assignment creation stores required fields**
*For any* assignment created by a teacher, the stored assignment should contain title, description, due date, class ID, and creator ID.
**Validates: Requirements 3.1**

**Property 14: Class assignments are visible to all students**
*For any* assignment assigned to a class, all students enrolled in that class should see the assignment in their assignment list.
**Validates: Requirements 3.2**

**Property 15: Submissions are timestamped and stored**
*For any* student submission, the system should store the submission with content, student ID, assignment ID, and submission timestamp.
**Validates: Requirements 3.3**

**Property 16: Grades are recorded with feedback**
*For any* graded submission, the system should store the grade score, feedback text, grader ID, and grading timestamp.
**Validates: Requirements 3.4**

**Property 17: Assignment views show submission status**
*For any* teacher viewing assignments, the display should show submission status (submitted, not submitted, graded) for each student in the class.
**Validates: Requirements 3.5**

### Progress Tracking Properties

**Property 18: Sessions update progress metrics**
*For any* completed session, the student's progress metrics should be updated to reflect the session scores for relevant skills.
**Validates: Requirements 4.1**

**Property 19: Dashboard displays all metrics**
*For any* student accessing their dashboard, the display should include daily streak, total points, study time, and progress percentage.
**Validates: Requirements 4.2**

**Property 20: Skill breakdown shows all skills with levels**
*For any* student viewing skill breakdown, all four skills (speaking, reading, listening, writing) should be displayed with scores and CEFR levels.
**Validates: Requirements 4.3**

**Property 21: Learning path shows progress indicators**
*For any* student viewing learning path, progress bars should be displayed for vocabulary, grammar, speaking, and IB Spanish B HL.
**Validates: Requirements 4.4**

**Property 22: Leaderboard ranks by points**
*For any* class leaderboard, students should be ordered by total points in descending order.
**Validates: Requirements 4.5**

### Teacher Dashboard Properties

**Property 23: Teacher dashboard shows all classes**
*For any* teacher accessing their dashboard, all classes where they are the teacher should be displayed with student counts.
**Validates: Requirements 5.1**

**Property 24: Class view shows all enrolled students**
*For any* class viewed by its teacher, all enrolled students should be displayed with their current progress metrics.
**Validates: Requirements 5.2**

**Property 25: Student analytics shows comprehensive data**
*For any* student analytics view, the display should include skill breakdowns, session history, and performance trends.
**Validates: Requirements 5.3**

**Property 26: Class creation stores required fields**
*For any* class created by a teacher, the stored class should contain name, school ID, and teacher ID.
**Validates: Requirements 5.4**

**Property 27: Student enrollment adds to class roster**
*For any* students added to a class, those students should appear in the class roster and see the class in their class list.
**Validates: Requirements 5.5**

### School Administration Properties

**Property 28: Admin dashboard shows management tools**
*For any* school admin accessing admin tools, the interface should display school information, user management, and license allocation sections.
**Validates: Requirements 6.1**

**Property 29: Teacher account creation sets correct role**
*For any* teacher account created by school admin, the user should have teacher role and be associated with the admin's school.
**Validates: Requirements 6.2**

**Property 30: Student account creation sets correct role**
*For any* student account created by school admin, the user should have student role and be associated with the admin's school.
**Validates: Requirements 6.3**

**Property 31: License usage displays accurate counts**
*For any* school, the license display should show total licenses equal to used licenses plus available licenses.
**Validates: Requirements 6.4**

**Property 32: Deactivated users cannot access platform**
*For any* deactivated user, login attempts should fail and existing tokens should be invalidated.
**Validates: Requirements 6.5**

### Payment and Subscription Properties

**Property 33: Plan selection creates checkout session**
*For any* subscription plan selected by a user, a Stripe checkout session should be created with correct plan details and pricing.
**Validates: Requirements 7.1**

**Property 34: Payment completion activates subscription**
*For any* successful payment, the user's subscription should be activated with status "active" and correct period dates.
**Validates: Requirements 7.2**

**Property 35: Subscription grants feature access**
*For any* user with active subscription, feature access should match the features included in their subscription tier.
**Validates: Requirements 7.3**

**Property 36: Subscription upgrade handles prorating**
*For any* subscription upgrade, the new subscription should be activated and charges should be prorated based on remaining period.
**Validates: Requirements 7.4**

**Property 37: Cancellation schedules end date**
*For any* subscription cancellation, the subscription should remain active until the end of the current billing period.
**Validates: Requirements 7.5**

**Property 38: Webhook updates subscription status**
*For any* Stripe webhook event, the corresponding subscription status should be updated to match the event data.
**Validates: Requirements 7.6**

### Session Feedback Properties

**Property 39: Session completion displays overall score**
*For any* completed session, the feedback display should include an overall score calculated from individual skill scores.
**Validates: Requirements 8.1**

**Property 40: Feedback includes all score categories**
*For any* session feedback, scores should be displayed for fluency, pronunciation, vocabulary, and grammar.
**Validates: Requirements 8.2**

**Property 41: Feedback provides improvement suggestions**
*For any* session feedback, specific suggestions for improvement should be provided with examples.
**Validates: Requirements 8.3**

**Property 42: Feedback recommends next topics**
*For any* session feedback, recommended practice topics should be generated based on the session performance scores.
**Validates: Requirements 8.4**

**Property 43: Feedback can be shared with teachers**
*For any* student's session feedback, the student should be able to share it with their assigned teachers.
**Validates: Requirements 8.5**

### UI and Navigation Properties

**Property 44: Navigation state persists across pages**
*For any* navigation between pages, user authentication state and selected context (class, assignment, etc.) should be preserved.
**Validates: Requirements 9.4**

**Property 45: Loading states display indicators**
*For any* asynchronous operation, a loading indicator should be displayed while the operation is in progress.
**Validates: Requirements 9.5**

### Security Properties

**Property 46: Passwords are encrypted**
*For any* user password stored in the database, it should be hashed using bcrypt or similar and never stored in plain text.
**Validates: Requirements 10.1**

**Property 47: Input validation prevents injection**
*For any* API request with user input, the input should be validated and sanitized before processing.
**Validates: Requirements 10.2**

**Property 48: Refresh tokens use HttpOnly cookies**
*For any* authentication response, refresh tokens should be set in HttpOnly cookies and not exposed to JavaScript.
**Validates: Requirements 10.3**

**Property 49: Rate limiting rejects excess requests**
*For any* endpoint with rate limiting, requests exceeding the limit should be rejected with 429 status code.
**Validates: Requirements 10.5**

### Real-time Features Properties

**Property 50: Real-time transcription during sessions**
*For any* active session with audio input, transcription should be provided in real-time as the user speaks.
**Validates: Requirements 11.1**

**Property 51: AI responses stream without blocking**
*For any* AI tutor response, the response should be streamed to the client without blocking the UI thread.
**Validates: Requirements 11.2**

**Property 52: Pronunciation errors are highlighted**
*For any* pronunciation evaluation with errors, specific words or phonemes with low scores should be highlighted in the feedback.
**Validates: Requirements 11.3**

**Property 53: WebSocket maintains session connection**
*For any* active AI tutor session, the WebSocket connection should remain open and handle reconnection if interrupted.
**Validates: Requirements 11.4**

### Analytics Properties

**Property 54: Class analytics aggregates student data**
*For any* class, analytics should aggregate data from all students including average scores, completion rates, and skill distributions.
**Validates: Requirements 12.1**

**Property 55: Student reports show progress over time**
*For any* student report, progress data should be displayed chronologically showing improvement or decline in each skill.
**Validates: Requirements 12.2**

**Property 56: Data export generates PDF reports**
*For any* analytics data export request, a PDF file should be generated containing the requested data in a formatted layout.
**Validates: Requirements 12.3**

**Property 57: Analytics show student comparisons**
*For any* analytics display, individual student scores should be shown alongside class averages for comparison.
**Validates: Requirements 12.4**

**Property 58: Weak areas are identified**
*For any* class analytics, skills or topics where the majority of students score below threshold should be highlighted as weak areas.
**Validates: Requirements 12.5**

