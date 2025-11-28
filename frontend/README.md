# Fluento AI Frontend

This is the frontend application for Fluento AI, a Spanish tutoring platform powered by AI.

## Tech Stack

- React 18 + TypeScript
- Vite
- TailwindCSS
- React Router v6
- Axios
- Zustand (State Management)
- Recharts (Data Visualization)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── App.tsx         # Main App component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Development

The application uses Vite as the build tool, which provides fast hot module replacement (HMR) for a smooth development experience.

## Docker

The application can be containerized using the provided Dockerfile:

```bash
docker build -t fluento-frontend .
docker run -p 3000:3000 fluento-frontend
```