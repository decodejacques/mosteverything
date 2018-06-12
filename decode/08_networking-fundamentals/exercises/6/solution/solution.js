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

function process(httpResponse) {
    if (httpResponse.indexOf('manipulated') != -1) {
        console.log("the word is on the page");
    } else {
        console.log("the word is not the page");
    }
}
let httpRequest = generateHTTPRequest('www.nba.com', '/jordan/');

makeRequest("www.nba.com", httpRequest, process)