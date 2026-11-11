//creating server using http module
const http = require("http");
const server = http.createServer((req, res) => {
  //Route 1
  if (req.url === "/" && req.method === "GET") {
    res.end("Welcome to the Task Manager!");
  }
  //Route 2
  else if (req.url === "/tasks" && req.method === "GET") {
    res.end("Here are your tasks!");
  }
  //Route 3
  else if (req.url === "/add-tasks" && req.method === "POST") {
    res.end("Task created successfully!");
  }
  else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});
//Starting the server on port 3000
server.listen(3000, () => {
    console.log("Server running on port 3000");
});