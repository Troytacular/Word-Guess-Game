let wins = 0
let losses = 0
let guesses = 9

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log(event.key)
    }
}