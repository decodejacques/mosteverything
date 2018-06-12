function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  let splitString = str.split(""); // let splitString = "hello".split("");
 
    let reverseArray = splitString.reverse(); // let reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // let joinArray = ["o", "l", "l", "e", "h"].join("");
    
}
// Expand each of the following and get the result of the expression
// #1
square(decrement(square(decrement(3))))
// #2
decrement(decrement(square(square(3))))
// #3
duplicateString(reverseString("hello"))
// #4
reverseString(duplicateString(duplicateString("foo")))
