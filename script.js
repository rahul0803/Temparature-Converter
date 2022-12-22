let celcius = document.getElementById("cel");
let fahrenheit = document.getElementById("fahren");


celcius.addEventListener("input", function () {
    let cel = this.value;
    let fahren = (cel * 9 / 5) + 32;
    if (!Number.isInteger(fahren)) {                                     // if number is integer, no need to do anything
        fahren = fahren.toFixed(4);                                      // if it has decimal places, then like this (need 4 decimal places)
    }
    fahrenheit.value = fahren;
})

fahrenheit.addEventListener("input", function () {
    let fahren = this.value;
    let cel = (fahren - 32) * 5 / 9;
    if (!Number.isInteger(cel)) {
        cel = cel.toFixed(4);
    }
    celcius.value = cel;
})