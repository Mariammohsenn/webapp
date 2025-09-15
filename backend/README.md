# Backend Service

This is the backend service built with NestJS.

## Running with npm

### Prerequisites
- Node.js (v18 or later)
- npm (v8 or later)
- MongoDB (v4.4 or later)

### MongoDB Setup
1. Install MongoDB on your system
2. Start MongoDB service:
```bash
# On Linux
sudo systemctl start mongod

# On macOS with Homebrew
brew services start mongodb-community

# On Windows
net start MongoDB
```
3. Verify MongoDB is running:
```bash
mongo --eval "db.version()"
```

### Installation
```bash
npm install
```

### Development
```bash
npm run start:dev
```

The service will be available at `http://localhost:5000`

## Running with Docker

### Prerequisites
- Docker

### Build and Run
```bash
docker build -t webapp-backend ./backend
docker run -p 5000:5000 webapp-backend
```
The service will be available at `http://localhost:5000`
