// Get task title from command-line arguments
const taskTitle = process.argv.slice(2).join(" ");

// Check if task title is provided
if (!taskTitle) {
    console.log("Please provide a task title!");
} else {
    console.log("Your Task:", taskTitle);
}