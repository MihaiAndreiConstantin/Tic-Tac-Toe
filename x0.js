let player = "X"
let fields = ["", "", "", "", "", "", "", "", "", ""]
let countMoves = 0
let winCombinations = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function pressButton(x) {
    if (fields[x] == "") {
        fields[x] = player
        updateFields(x)
        nextPlayer() 
        ++countMoves
        checkCombinations()
        checkValidMoves(x) 
    }
}

function nextPlayer() {
    if (player == "X") {
        player = "O"
    } else {
        player = "X"
    }
    updateStatus()
}

function updateFields(x) {
    document.getElementById(x).innerHTML = player
}

function updateStatus() {
    document.getElementById("game-status").innerHTML = "It's " + player + "'s Turn"
}

function checkCombinations() {
    for (let i = 0; i <= 7; ++i) {
        if (fields[winCombinations[i][0]] == "X" && fields[winCombinations[i][1]] == "X" && fields[winCombinations[i][2]] == "X") {
            xWin()
        }
        if (fields[winCombinations[i][0]] == "O" && fields[winCombinations[i][1]] == "O" && fields[winCombinations[i][2]] == "O") {
            oWin()
       }
    }
    
}

function xWin() {
    document.getElementById("game-status").innerHTML = "- - - X Win The Game! - - -"
    endGame()
}

function oWin() {
    document.getElementById("game-status").innerHTML = "- - - O Win The Game! - - -"
    endGame()
}

function endGame() {
    document.getElementById("gameboard").innerHTML = '<button type="button" class="restartBtn" onClick="window.location.reload();">Restart!</button>'
}

function draw() {
    document.getElementById("game-status").innerHTML = "The game was not won by any player!"
}

function checkValidMoves(x) {
    if(countMoves == 9) {
        endGame()
        draw()
    }
}