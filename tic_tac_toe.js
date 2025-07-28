const buttons = document.querySelectorAll(".box")
const reset = document.querySelectorAll(".restart")

let player1 = true;

// Winning pattern
const winning = [
    // row wise
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    // column wise
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    // diagnols wise
    [0, 4, 8], [2, 4, 6]
];


buttons.forEach(box => {
    box.addEventListener('click', function (event) {
        // const buttonValue = event.target.value;
        // console.log('Button clicked! Value:', buttonValue);
        box.innerText = handle(); // give input as X or O.
        box.style.padding = "20px 25px"; // after given true input it sets padding as per given.
        box.disabled = true; // it will not allow to change or re-enter X or O again.
        checkwinner(); // checks the winner logic.
    });
});

// handle() function for checking the turn of playeer 
function handle() {
    if (player1) {  // checks if the player 1 is true then his turn
        player1 = false; //after complete of player 1 turn it will make it false and next time turn for palyer 2
        return "X"; //print/return X on button.
    } else {
        player1 = true; //after player 1 turns over it will goes for player 2 turn
        return "O"; //prinnt/return O on button
    }
}

function checkwinner() {
    for (let pattern of winning) {
        // console.log('hello' ,pattern)
    }
}

/* reset.forEach(restart => {
    restart.addEventListener('click', function (event) {
        const buttonValue = event.target.value;
        box.innerText = "";
    })
    }) */