# Web Application

This is a full-stack web application with a React frontend and NestJS backend.

## Project Structure

```
webapp/
├── backend/               # NestJS backend service
├── frontend/              # React frontend service
├── docs/                  # Project documentation
├── README.md/             
├── docker-compose.yaml/               
└── .gitignore               
```

## Running the Project

### Using Docker Compose (Recommended)

Prerequisites:
- Docker
- Docker Compose

```bash
# Build and start all services
docker-compose up --build

# Stop all services
docker-compose down
```

The services will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MongoDB: localhost:27017

### Using npm (Individual Services)

Prerequisites:
- Node.js (v18 or later)
- npm (v8 or later)
- MongoDB (v4.4 or later)

1. **Start MongoDB:**
```bash
# On Linux
sudo systemctl start mongod

# On macOS with Homebrew
brew services start mongodb-community

# On Windows
net start MongoDB
```
Verify MongoDB is running:
```bash
mongo --eval "db.version()"
```


2. **Start Backend:**
```bash
cd backend
npm install
npm run start:dev
# Backend runs on http://localhost:5000
```

3. **Start Frontend:**
```bash
cd frontend
npm install
npm start
# Frontend runs on http://localhost:3000
```

For detailed instructions on running each service individually with npm, please refer to:
- [Backend README](backend/README.md)
- [Frontend README](frontend/README.md)

Note: When running without Docker, make sure MongoDB is installed and running on your system. The backend service requires MongoDB to be available at `mongodb://localhost:27017`.

## Documentation

Detailed project documentation can be found in the [docs](docs/) directory.
