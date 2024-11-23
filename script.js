let btn = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset");
let wlcm = document.querySelector("#welcome");
let newg = document.querySelector("#new-game");
let wltxt = wlcm.innerText;
let turnO = true;
let winning = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

//reset game
const resetGame = () => {
    turnO = true;
    enableBtns();
    wlcm.innerText = wltxt;
    document.getElementById("new-game").style.display = "none";

}
//main loop
btn.forEach((b) => {
    b.addEventListener("click", () => {
        if (turnO === true) {
            b.innerText = "O";
            turnO = false;
            b.disabled = true;
        }
        else {
            b.innerText = "X";
            turnO = true;
            b.disabled = true;
        }
        checkWinner();
    })
})
//loop end

//disable buttons
const disableBtns = () => {
    for (let b of btn) {
        b.disabled = true;
    }
}
//enable function for reset all the buttons
const enableBtns = () => {
    for (let b of btn) {
        b.disabled = false;
        b.innerText = "";
    }
}

//winner check
const checkWinner = () => {
    for (let pattern of winning) {
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {

                disableBtns();
                wlcm.innerText = "Hurray! " + pos1 + " win the Game";
                document.getElementById("new-game").style.display = "block";
            }
        }
    }
}
resetbtn.addEventListener("click", resetGame);
newg.addEventListener("click", resetGame);


