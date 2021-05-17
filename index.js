/*
 * Primary file for the API
 *
 */

// Dependencies

const http = require("http");
const url = require("url");

// Server should respond with all requests to a string
const server = http.createServer(function (req, res) {
    // Get the url and parse it
    const parsedUrl = url.parse(req.url, true);

    // get the path from the url
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, "");

    // send the response
    res.end("Hello World\n");

    // Log the request path
    console.log("Request is received on this path: " + trimmedPath);
});

// Start the server, and have it listen on port 3000
server.listen(4000, function () {
    console.log("The server is listening on port 3001 now");
});
