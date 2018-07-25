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
let http_request =
    `GET /index.html HTTP/1.1
host: www.dolekemp96.com
Connection: close

`;

// IGNORE EVERYTHING BEFORE THIS LINE

function process(httpResponse) {
   /// your code here
}

makeRequest("www.dolekemp96.org", http_request, process);
