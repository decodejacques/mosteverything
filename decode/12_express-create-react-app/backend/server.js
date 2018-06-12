let express = require('express');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))

let cookieMap = {}; // maps a session id to a username

app.post('/login', (req, res) => {
    let loginInformation = JSON.parse(req.body.toString());
    let usr = loginInformation.username;
    let pwd = loginInformation.password;
    let sessionId = "" + Math.floor(Math.random() * 1000000);
    
    if ((usr == "sue" && pwd == "romeo") ||
        (usr == "bob" && pwd == "juliet")) {
        res.set("Set-Cookie","sessionId=" + sessionId);   
        cookieMap[sessionId] = usr;
        res.send("success");
    } else {
        res.send("fail");
    }
})

let m = {}

app.post('/counter', (req, res) => {
    let cookieString = req.headers.cookie;
    let cookieArray = cookieString.split('=');
    let sessionId = cookieArray[1];
    let usr = cookieMap[sessionId];    
    console.log(cookieMap);
    if (m[usr] === undefined) {
        m[usr] = 0;
    }
    m[usr] = m[usr] + 1;
    res.send("" + m[usr]);
})

app.listen(4000);

/*

/login:

1. A random sessionId is created
2. An association is made between the sessionId and the username

/counter: 

1. the cookie is read from the headers of the HTTP request
2. A session ID is extracted from the cookie
3. The session ID is used to look up the username

*/