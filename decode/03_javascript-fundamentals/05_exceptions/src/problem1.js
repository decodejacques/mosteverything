function first(arr) {
    // Throw an exception if the array has no elements
    // Otherwise return the first element
}

function detective(i) {
    function suspect(i) {
        if(i * 7 % 3 == 0) throw new Error("Bad i!");
    }
    // detective checks to see if the suspect throws an exception on input i.
    // Returns "everything ok" if the suspect doesn't. 
    // Returns "something fishy" if the suspect does.
}

function assignFlight(name) {
    let flightNumber = ((name.length * 7) % 20) + "0";
    let terrorSuspects = ["bob", "eric", "susie"];
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number
}

module.exports = {first, detective, assignFlight}