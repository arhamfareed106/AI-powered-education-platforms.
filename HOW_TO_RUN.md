# How to Run Fluento AI Application

## Prerequisites
- Node.js (v16 or higher)
- Python (3.9 or higher)
- npm or yarn

## Running the Application

### Frontend (React + TypeScript)
1. Open a terminal/command prompt
2. Navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and visit: http://localhost:3000/

### Backend (FastAPI)
1. Open a new terminal/command prompt
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Start the development server:
   ```
   python simple_server.py
   ```
5. The API will be available at: http://localhost:8000/

## Accessing the Application
- Frontend: http://localhost:3000/
- Backend API Documentation: http://localhost:8000/docs

## Available Endpoints (Simple Server)
- GET / - Welcome message
- GET /health - Health check
- GET /api/v1/test - Test endpoint

## Note
The full backend implementation has some import issues that need to be resolved. The simple server provides basic functionality to demonstrate how the frontend and backend can work together.

For a production deployment, you would use Docker Compose:
```
docker-compose up --build
```