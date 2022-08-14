let countH = 0
let countG = 0
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

function addH1() {
    countH += 1
    scoreHome.textContent = countH
}

function addH2() {
    countH += 2
    scoreHome.textContent = countH
}

function addH3() {
    countH += 3
    scoreHome.textContent = countH
}

function addG1() {
    countG += 1
    scoreGuest.textContent = countG
}

function addG2() {
    countG += 2
    scoreGuest.textContent = countG
}

function addG3() {
    countG += 3
    scoreGuest.textContent = countG
}

function reset() {
    countH = 0
    countG = 0
    scoreHome.textContent = countH
    scoreGuest.textContent = countG
     
}