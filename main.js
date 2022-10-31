
let homeScore = 0;
let awayScore = 0;


updateHome = false;
updateAway = false;
clearScore = false;


console.log("Connected to main js")



function addOne(id) {
    console.log("Adding one ", id)

    if (id == "Home1") {
        console.log("Updating Home ")
        homeScore++
        updateHome = true
        drawScore()

    }
    else if (id == "Away1") {
        console.log("Updating Away ")
        awayScore++
        updateAway = true
        drawScore()
    }

}
function addThree(id) {
    console.log("Adding Three ", id)

    if (id == "Home3") {
        console.log("Updating Home ")
        homeScore += 3
        updateHome = true
        drawScore()

    }
    else if (id == "Away3") {
        console.log("Updating Away ")
        awayScore += 3
        updateAway = true
        drawScore()
    }

}

function addSix(id) {
    console.log("Adding 6")

    if (id == "Home6") {
        console.log("Updating Home ")
        homeScore += 6
        updateHome = true
        drawScore()

    }
    else if (id == "Away6") {
        console.log("Updating Away ")
        awayScore += 6
        updateAway = true
        drawScore()
    }
}



function drawScore() {
    let homeElem = document.getElementById("scoreA")
    let awayElem = document.getElementById("scoreB")


    if (updateHome) {
        console.log("Updating Home Score")
        homeElem.innerText = homeScore;
        updateHome = false;
    }
    if (updateAway) {
        console.log("Updating Away Score")

        awayElem.innerText = awayScore;
        updateAway = false;
    }
    if (clearScore) {
        console.log("Clear")
        debugger
        zeroAmount = 0
        homeScore = zeroAmount
        awayScore = zeroAmount

        homeElem.innerText = homeScore;
        awayElem.innerText = awayScore;
        clearScore = false

    }

    console.log("Score Updated")

}



function zeroScore() {

    clearScore = true
    console.log("Attempting to clear ", clearScore)
    debugger
    drawScore()
}


function addPlayer() {
    console.log("Adding player")
    document.getElementById("new-player").innerHTML = ""
}


