const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my first Node.js");
  } else if (req.url === "/about") {
    res.end("This is a little bit of our Backgrounds");
  } else {
    res.end(`
  <h1 style="color: red" >Ouy Youy</h1>
  <p>We seem to be not able to find what you are looking for</p>
  <a href="/">I want to go Home</a>
  `);
  }
});

server.listen(8080);
