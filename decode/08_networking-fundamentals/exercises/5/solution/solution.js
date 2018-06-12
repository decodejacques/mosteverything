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
    let lines = httpResponse.split('\n');
    for(let i = 0; i < 11; i++) {
        lines.shift();
    }
    let numChars = 0;
    for(let i = 0; i < lines.length; i++) {
        numChars = numChars + lines[i].length + 1;
    }
    console.log("The number of characters on the page is " + numChars);
}

makeRequest("www.dolekemp96.org", http_request, process);