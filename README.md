# Ticket Management System

A backend system developed to manage bus tickets with user authentication, role-based management (admin and user), and ticket purchasing functionality. This system allows users to view available buses and tickets, and admins can add, update, and delete buses and tickets.

## Features

- **User Authentication**: Register, login, and JWT-based authentication.
- **Admin Functionalities**: Add, update, and delete buses and tickets.
- **User Functionalities**: View buses and purchase tickets.
- **Role-Based Authorization**: Admins and users have different access levels.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt
- **Programming Language**: JavaScript (with TypeScript support)


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/ticket-management-system.git
    ```

2. Navigate into the project directory:

    ```bash
    cd ticket-management-system
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables in a `.env` file:

    ```
    JWT_SECRET=your_jwt_secret_key
    MONGO_URI=your_mongo_database_connection_string
    ```

5. Start the application:

    ```bash
    npm start
    ```

    The server will start on `http://localhost:5000`.

## API Endpoints

### Authentication

- **POST** `/auth/register`: Register a new user
- **POST** `/auth/login`: Log in an existing user
- **POST** `/auth/logout`: Log out the current user

### Admin Endpoints

- **POST** `/admin/bus`: Add a new bus
- **PUT** `/admin/bus/:id`: Update bus information
- **DELETE** `/admin/bus/:id`: Delete a bus
- **POST** `/admin/ticket`: Upload a new ticket
- **PUT** `/admin/ticket/:id`: Update ticket information
- **DELETE** `/admin/ticket/:id`: Delete a ticket

### User Endpoints

- **GET** `/buses`: Get a list of all buses
- **GET** `/tickets`: Get available tickets for specific buses
- **POST** `/tickets/purchase`: Purchase a ticket for a specific bus





