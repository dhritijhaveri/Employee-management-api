# Employee Management API

A REST API built with Node.js, Express.js, and MongoDB for managing employee records, with EJS views for creating and updating employees.

## Tech Stack
Node.js, Express.js, MongoDB, Mongoose, EJS, JSON Web Tokens (JWT)

## Features
- Create, read, update, and delete employee records (full CRUD)
- Filter employees by role
- EJS forms for creating and updating employees
- MVC structure (routes, controllers, models, middleware)
- JWT token generation helper and authentication middleware

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Homepage (placeholder) |
| GET | `/create` | Renders the create employee form |
| POST | `/create` | Creates an employee (`name`, `email`, `password`, `department`, `role`) |
| GET | `/read` | Returns all employees as JSON |
| GET | `/update` | Renders the update form |
| PATCH | `/update/:_id` | Updates an employee by ID |
| DELETE | `/delete/:_id` | Deletes an employee by ID |
| GET | `/list/:role` | Returns all employees with the given role |

## Getting Started

1. Clone the repo
   ```
   git clone https://github.com/dhritijhaveri/employee-management-api.git
   cd employee-management-api
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Create a `.env` file (see `.env.example`)
   ```
   JWT_SECRET=your_secret_here
   ```
4. Make sure MongoDB is running locally on `mongodb://localhost:27017`
5. Start the server
   ```
   node index.js
   ```
   The server runs on port 7777.

## Roadmap
- Apply JWT authentication middleware to protected routes
- Hash passwords before saving
- Add input validation and pagination
- Deploy with a cloud database (MongoDB Atlas)
