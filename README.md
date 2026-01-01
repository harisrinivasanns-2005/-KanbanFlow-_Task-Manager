# 🗂️ KanbanFlow — Task Manager (MERN)

A simple, secure, and user-friendly Kanban-style task manager built with the MERN stack (MongoDB, Express, React, Node). KanbanFlow is designed to help users organize tasks into columns (To-Do, In-Progress, Completed), manage them with full CRUD operations, and authenticate securely using JWTs.


KanbanFlow is a full-stack task management application inspired by tools like **Trello** and **Asana**.  
It helps users organize, track, and manage tasks efficiently using a **Kanban-style workflow**, with secure authentication and full CRUD functionality.



---

## Table of Contents

-[Purpose](#purpose)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started (Local Development)](#getting-started-local-development)
  - [Prerequisites](#prerequisites)
  - [Clone & Install](#clone--install)
  - [Environment Variables](#environment-variables)
  - [Run](#run)
- [API Overview & Docs](#api-overview--docs)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 Purpose

The purpose of the KanbanFlow Task Manager is to provide a secure and user-friendly platform for managing tasks using a Kanban workflow, while demonstrating real-world **full-stack MERN application development** skills.

----

## Features

### 🔐 User Authentication
- User Registration
- User Login
- JWT-based authentication
- Protected API routes

### ✅ Task Management
- Create, Read, Update, Delete (CRUD) tasks
- Tasks are user-specific and secured

### 🔄 Kanban Workflow
- Task statuses:
  - To-Do
  - In-Progress
  - Completed
- Update task status directly from the UI

---

## Tech Stack

- Frontend
  - React.js
  - Axios
  - React Router
  - Context API (global state)
- Backend
  - Node.js
  - Express.js
  - MongoDB Atlas
  - Mongoose
  - bcrypt (password hashing)
  - jsonwebtoken (JWT)
- Tools
  - Postman (API testing)
  - Swagger (API docs)
  - Concurrently (run client + server together)
  - Git & GitHub
- Deployment (examples)
  - Backend: Render / Heroku / Railway
  - Frontend: Vercel / Netlify

---

## Project Structure (monorepo)


| Path | Description |
| --- | --- |
| kanbanflow-task-manager/ | Root (monorepo) |
| backend/ | Backend source code |
| backend/config/ | Database connection (db.js) |
| backend/controllers/ | Auth and Task controllers |
| backend/middleware/ | Auth middleware (JWT verification) |
| backend/models/ | Mongoose schemas (User, Task) |
| backend/routes/ | API endpoints (auth, tasks) |
| backend/server.js | Backend entry point |
| frontend/ | Frontend source code |
| frontend/public/ | Public static assets |
| frontend/src/components/ | Reusable UI components (Navbar, Board, Card, Forms) |
| frontend/src/context/ | AuthContext, TaskContext |
| frontend/src/pages/ | Pages (Login, Register, Dashboard) |
| frontend/src/services/ | Axios API calls and service wrappers |
| frontend/src/App.js | React App entry component |
| package.json | Root package scripts (Concurrently) |

---

## Getting Started (Local Development)

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- (Optional) Postman for API testing

### Clone & Install

Clone the repository and install dependencies:

```bash
# clone
git clone https://github.com/SanjanaSabat0263/KanbanFlow_TaskManager.git
cd KanbanFlow_TaskManager

# install root (concurrently)
npm install

# backend
cd backend
npm install

# frontend
cd ../frontend
npm install

# go back to root
cd ..
```

You can also use `yarn` in place of `npm` if preferred.

### Environment Variables

Create a `.env` file inside the `backend/` folder with the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d          # optional
```

If you deploy, set the same variables in your hosting provider (Render, Heroku, etc.).

### Run (Development)

From the root directory, run both frontend and backend concurrently (if configured in root package.json):

```bash
npm run dev
```

Alternatively, run each part separately:

```bash
# backend
cd backend
npm run dev      # or npm start

# frontend
cd ../frontend
npm start
```

By default:
- Backend: http://localhost:5000 (or PORT in .env)
- Frontend: http://localhost:3000

---

## API Overview & Docs

The API is RESTful and typically exposes routes like:

- POST /api/auth/register — Register new user
- POST /api/auth/login — Authenticate and receive JWT
- GET /api/tasks — Get all tasks for authenticated user
- POST /api/tasks — Create a new task (title, description, status, dueDate, etc.)
- PUT /api/tasks/:id — Update a task
- DELETE /api/tasks/:id — Delete a task

Swagger UI is available (if enabled) at:
- /api-docs  (visit this path when your backend server is running)

Postman collection: Add a link or import the collection exported from your workspace.

Example cURL (get tasks):

```bash
curl -H "Authorization: Bearer <TOKEN>" http://localhost:5000/api/tasks
```

---

## Usage

- Register a new user or log in.
- Create tasks and assign statuses (To-Do, In-Progress, Completed).
- Move tasks between columns to reflect progress.
- Edit or delete tasks as needed.
- All task data is scoped to the user who created it.

---

## Deployment

- Backend: push code to a git remote and deploy to Render/Heroku/Railway. Ensure environment variables (MONGO_URI, JWT_SECRET) are set in the provider.
- Frontend: build the React app (`npm run build`) and deploy to Vercel, Netlify, or serve statically from a host.
- If deploying together, configure CORS on backend and set FRONTEND_URL environment variable(s) if necessary.

---

## Contributing

1. Fork the repository
2. Create a feature branch: git checkout -b feature/YourFeature
3. Commit your changes: git commit -m "Add some feature"
4. Push to your branch: git push origin feature/YourFeature
5. Open a Pull Request describing your changes

Please follow these guidelines:
- Write clear, focused PR descriptions
- Keep commits atomic and well-named
- Add/update tests where appropriate

You can also open issues for bugs or feature requests.


