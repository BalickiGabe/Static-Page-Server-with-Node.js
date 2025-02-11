var http = require("http");
var fs = require("node:fs");

http
  .createServer(function (req, res) {
    let url = req.url;
    let filename = "index.html";

    switch (url) {
      case "/":
        filename = "index.html";
        break;
      case "/about":
        filename = "about.html";
        break;
      case "/contact-me":
        filename = "contact-me.html";
        break;
      default:
        filename = "404.html";
    }

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
