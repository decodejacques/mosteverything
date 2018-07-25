let net = require('net');
function makeRequest(addr, req, f) {
    let client = new net.Socket();
    let finalData = "";
    client.connect(80, addr, function () {
        return client.write(req);
    });
    client.on("data", function (data) {
        finalData += data.toString();
    });
    client.on('close', function () {
        f(finalData);
    });
}

//The following string *MUST* end with 2 newlines
function generateHTTPRequest(host, path) {
    return `GET ${path} HTTP/1.1
host: ${host}
Connection: close

`;
}

// IGNORE EVERYTHING BEFORE THIS LINE

function process(httpResponse) {
    console.log(httpResponse);
    // Your code here
}
let httpRequest = generateHTTPRequest('www.dolekemp96.org', '/');

makeRequest("www.dolekemp96.org", httpRequest, process)
