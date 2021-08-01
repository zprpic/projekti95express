const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http
  .createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === "/" || url === "/index.html") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homePage);
      res.end();
    } //style
    else if (url === "/styles.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(homeStyles);
      res.end();
    } //logo
    else if (url === "/logo.svg") {
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(homeImage);
      res.end();
    } //logic
    else if (url === "/browser-app.js") {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(homeLogic);
      res.end();
    } // about page
    else if (url === "/about.html") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>about page </h1>");
      res.end();
    } // 404 page
    else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("page not found");
      res.end();
    }
  })
  .listen(5000);
