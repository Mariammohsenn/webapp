# Frontend Service

This is the frontend service built with React.

## Running with npm

### Prerequisites
- Node.js (v18 or later)
- npm (v8 or later)

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
The development server will be available at `http://localhost:3000`

## Running with Docker

### Prerequisites
- Docker

### Build and Run
```bash
docker build -t webapp-frontend .
docker run -p 3000:3000 webapp-frontend
```

The service will be available at `http://localhost:3000`

## Features
- React 19 with TypeScript
- React Router for navigation
- Axios for API communication
- Responsive design
