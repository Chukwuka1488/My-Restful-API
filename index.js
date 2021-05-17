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

    // get the query string as an object
    const queryStringObject = parsedUrl.query;

    // get the HTTP method
    const method = req.method.toLowerCase();

    // send the response
    res.end("Hello World\n");

    // Log the request path
    console.log(
        "Request is received on this path: " +
            trimmedPath +
            " with this: " +
            method +
            " and with these query string parameters: ",
        queryStringObject
    );
});

// Start the server, and have it listen on port 3000
server.listen(4000, function () {
    console.log("The server is listening on port 4000 now");
});
