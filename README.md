
# Chat Application with PostgreSQL

## Overview
This is a chat application developed as an assignment. The application allows users to send messages and receive automated responses. It uses PostgreSQL as the database, which is set up using Docker.

## Features
- User can send messages.
- Bot automatically responds to user messages based on predefined rules.
- Messages are stored in a PostgreSQL database.
- Adminer is used for database management.

## Technologies Used
- Frontend: React.js with Material-UI
- Backend: Node.js with Express
- Database: PostgreSQL (via Docker)
- Adminer (for database management)

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js (version 14 or higher)
- Docker (with Docker Compose)

### 1. Clone the Repository
Clone the repository to your local machine using:
```sh
git clone <repository-url>
cd <repository-directory>
```

### 2. Set Up the PostgreSQL Database Using Docker
Run the following command to start the PostgreSQL database and Adminer:
```sh
docker-compose up
```

This command will start two services:
- PostgreSQL database on port 5432.
- Adminer on port 8080 for database management.

### 3. Install Backend Dependencies (Node.js)
Navigate to the backend directory and install the required dependencies:
```sh
cd backend
npm install
```

### 4. Install Frontend Dependencies (React.js and Material-UI)
Navigate to the frontend directory and install the required dependencies:
```sh
cd frontend
npm install
```

### 5. Configure Environment Variables (Node.js)
Create a `.env` file in the backend directory with the following content:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=admin@123
DB_NAME=Chatbot
```

### 6. Initialize the Database (PostgreSQL)
Ensure your PostgreSQL container is running, then initialize the database:
```sh
docker-compose exec db psql -U admin -d Chatbot -f /docker-entrypoint-initdb.d/init.sql
```

### 7. Start the Backend Server (Node.js)
In the backend directory, start the server:
```sh
npm start
```
The backend server will start on `http://localhost:5000`.

### 8. Start the Frontend Application (React.js)
In the frontend directory, start the React application:
```sh
npm start
```
The frontend will start on `http://localhost:3000`.

### 9. Access Adminer
To manage your database, open Adminer in your browser at `http://localhost:8080` and log in with the following credentials:
- System: PostgreSQL
- Server: db
- Username: admin
- Password: admin@123
- Database: Chatbot

## Technology Details

### React.js
The frontend of this chat application is built using React.js. React is a JavaScript library for building user interfaces. This application uses functional components and hooks for state management and side effects.

### Material-UI
Material-UI is used to style the React components. It provides a set of React components that implement Google's Material Design. The following Material-UI components are used:
- `Container`
- `Typography`
- `Paper`

### Node.js and Express
The backend server is built with Node.js and Express. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### PostgreSQL
PostgreSQL is an open-source relational database management system. This application uses PostgreSQL to store chat messages. Docker is used to set up the PostgreSQL database, making it easy to manage and deploy.

## Testing the Application
1. Open your browser and go to `http://localhost:3000`.
2. Interact with the chat interface by sending messages.
3. Check the stored messages in Adminer at `http://localhost:8080`.

## Additional Information
- If you encounter any issues, check the logs in the terminal for both the frontend and backend servers.
- Ensure Docker is running properly and the PostgreSQL service is up.

## Contact
For any questions or further information, please contact Vijayendra Kumbhar at vijayendrak629@gmail.com.


### Notes:
1. Replace placeholders like `<repository-url>` and `<repository-directory>` with actual values.
2. Adjust any paths or commands if your project structure is different.
3. Include any other specific instructions that might be necessary for running your application, like initializing the database schema or data.

Make sure to test these instructions to ensure they accurately describe the setup and usage of your application. This will help the reviewers to easily understand and run your project.