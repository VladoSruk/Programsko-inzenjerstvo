const http = require("http");
const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "healthy" }));
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("API running");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on 0.0.0.0:${port}`);
});
