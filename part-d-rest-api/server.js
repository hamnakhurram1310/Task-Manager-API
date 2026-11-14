
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
    { id: 1, title: "Learn Node.js", completed: false },
    { id: 2, title: "Learn Express.js", completed: false }
];

//Get:Fetch or read data from the server
app.get("/api/v1/tasks", (req, res) => {
    res.status(200).json({
        success: true,
        data: tasks
    });
});

// GET: Retrieve a single task by ID
app.get("/api/v1/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });
});

// POST:Create a new task
app.post("/api/v1/tasks", (req, res) => {

    const { title } = req.body;

    if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
        success: false,
        message: "Task title is required"
    });
}
    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json({
        success: true,
        data: newTask
    });
});


// PUT:Update a task
app.put("/api/v1/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const { title, completed } = req.body;

    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;

    res.status(200).json({
        success: true,
        data: task
    });
});

// DELETE:Delete a task
app.delete("/api/v1/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
        data: deletedTask[0]
    });
});

//  To Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




