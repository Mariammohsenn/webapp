FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Override the MongoDB connection in the source TypeScript file
RUN sed -i 's|mongodb:\/\/127\.0\.0\.1:27017\/myapp|mongodb:\/\/mongodb:27017\/myapp|g' /usr/src/app/src/app.module.ts

RUN npm run build

# Debug: Check the content and structure of the compiled files
RUN find /usr/src/app/dist -type f -exec echo {} \; && \
    cat /usr/src/app/dist/app.module.js

EXPOSE 5000

CMD ["npm", "run", "start:dev"]