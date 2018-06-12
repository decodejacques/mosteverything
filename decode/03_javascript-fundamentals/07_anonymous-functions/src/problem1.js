// fix all the errors
function c(g, h) {
    let x = g(6);
    let y = h(8);
    return [x, y];
}

function t() {
    return c(function (x) {return y + 1}, function (y) {return x * 2});
}

module.exports = t;
