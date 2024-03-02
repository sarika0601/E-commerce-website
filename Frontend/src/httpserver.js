const { Console } = require("console");
const fs = require("fs");
const http = require("http");

const port = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html/jsx/css");
  console.log(req.url);

  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>welcome to the page</h1>");
  } else if (req.url == "/web") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.js");
    res.end(data.toString());
  } else {
    res.statusCode = 404;
    res.end("<h1>ERROR PAFE NOT FOUND</h1>");
  }
});

server.listen(port, () => {
  console.log("Server is Listnening on port ");
});
