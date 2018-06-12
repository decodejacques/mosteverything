let html = `<html>
<body>
    <div id='somediv'></div>
    <script src='/somescript.js'></script>
</body>
</html>
`;
let javascript = `document.getElementById("somediv").innerText="success!";`;
function process(httpRequest) {
    let requestLines = httpRequest.split('\n');
    let firstLine = requestLines.shift();
    let elements = firstLine.split(' ');
    let path = elements[1];
    console.log(path);
    if(path === '/') {
        return makeResponse('text/html', html);
    }
    if(path === '/somescript.js') {
        return makeResponse('application/javascript', javascript);
    }
    return makeResponse('text/html', "<h1>hello</h1>");
}

// IGNORE EVERYTHING AFTER THIS LINE!!!!!

let net = require('net');
function makeResponse(contentType, x) {
    return `
HTTP/1.1 200 OK
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
Content-Length: ${x.length}
Content-Type: ${contentType}
Connection: Closed

${x}`
}
function createServer(f) {
    net.createServer(function (sock) {
        sock.on('data', function (data) {
            let httpResponse = f(data.toString());
            if(!httpResponse) httpResponse = "";
            sock.write(httpResponse);
        });
    }).listen(3000)
}


createServer(process);
