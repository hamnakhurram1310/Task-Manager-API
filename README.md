# Task Manager API

## Project Description
This project is a Task Manager API built using Node.js and Express.js.

It stores tasks in an array (no database).

## Part B – Core HTTP Server

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Welcome message |
| GET | `/tasks` | Display tasks message |
| POST | `/add-tasks` | Create task message |

## Part C & D – Express REST API

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/tasks` | Get all tasks |
| GET | `/api/v1/tasks/:id` | Get a single task by ID |
| POST | `/api/v1/tasks` | Create a new task |
| PUT | `/api/v1/tasks/:id` | Update a task |
| DELETE | `/api/v1/tasks/:id` | Delete a task |

## Request Body Examples

### POST – Create Task
```json
{
  "title": "Learn JavaScript"
}
```

### PUT – Update Task
```json
{
  "title": "Learn Express.js",
  "completed": true
}
```

## HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | OK – Request successful |
| 201 | Created – Task created successfully |
| 400 | Bad Request – Invalid task title |
| 404 | Not Found – Task not found |

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman

## How to Run

Run the Express server:

```bash
node part-d-rest-api/server.js
```

Server runs on port 3000.

## Data Storage
Tasks are stored in a JavaScript array. No database is used.

