/*
 * Primary file for the API
 *
 */

// Dependencies

const http = require("http");
const url = require("url");
const stringDecoder = require("string_decoder").StringDecoder;

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

    // get the headers as an object
    const headers = req.headers;

    // get the payload is there is any
    const decoder = new StringDecoder("utf-8");
    const buffer = "";
    req.on("data", function (data) {
        buffer += decoder.write(data);
    });
    req.on("end", function () {
        buffer += decoder.end();

        // send the response
        res.end("Hello World\n");

        // Log the request path
        console.log("Request received with this payload ", buffer);
    });
});

// Start the server, and have it listen on port 3000
server.listen(5500, function () {
    console.log("The server is listening on port 5500 now");
});
