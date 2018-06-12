function run() {
    let body = document.getElementsByTagName("body")[0];
    let t = document.createTextNode("Go to this url: http://bit.ly/1e1EYJv");       // Create a text node
    body.appendChild(t);                                // Append the text to <button>
    document.body.appendChild(btn);
}

export default run;