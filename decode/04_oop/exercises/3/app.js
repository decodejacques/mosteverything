function populate(DOMElement, e) {
    DOMElement.innerHTML = '';
    DOMElement.appendChild(e.render());
}

// IGNORE EVERYTHING ABOVE THIS LINE

class h1 {
    constructor(text) {
        this.text = text;
    }
    render() {
        let ret = document.createElement("h1");
        ret.innerText = this.text;
        return ret;
    }
}

class h2 {
    constructor(text) {
        this.text = text;
    }
    render() {
        let ret = document.createElement("h2");
        ret.innerText = this.text;
        return ret;
    }
}

class h3 {
    constructor(text) {
        this.text = text;
    }
    render() {
        let ret = document.createElement("h3");
        ret.innerText = this.text;
        return ret;
    }
}


class div {
    constructor(children) {
        this.children = children;
    }
    render() {
        let ret = document.createElement("div");
        for (let i = 0; i < this.children.length; i++) {
            ret.appendChild(this.children[i].render());
        }
        return ret;
    }
}



populate(document.getElementById('root'),
    new div([new h1("I love javascript")]))