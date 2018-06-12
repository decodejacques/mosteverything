let rootdiv = document.getElementById('root');
let elem = React.createElement(
    "div",
    null,
    React.createElement(
        "a",
        { href: "www.google.com2" },
        "Google.com"
    ),
    React.createElement(
        "div",
        { id: "somedivid" },
        "some div"
    )
);
ReactDOM.render(elem, rootdiv);
