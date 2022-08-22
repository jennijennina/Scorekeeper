let homeScoreField = document.getElementById("homeScoreField");
let awayScoreField = document.getElementById("awayScoreField");

let homeScore = 0;
let awayScore = 0;

function addHome1() {
    homeScore++;
    // homeScore = homeScore + 1;
    // homeScore += 1;
    homeScoreField.innerHTML = homeScore;
}

function addHome2() {
    homeScore += 2;
    homeScoreField.innerHTML = homeScore;
}

function addHome3() {
    homeScore += 3;
    homeScoreField.innerHTML = homeScore;
}

function addAway1() {
    awayScore++;
    awayScoreField.innerHTML = awayScore;
}

function addAway2() {
    awayScore += 2;
    awayScoreField.innerHTML = awayScore;
}

function addAway3() {
    awayScore += 3;
    awayScoreField.innerHTML = awayScore;
}

function reset() {
    homeScore = 0;
    awayScore = 0;
    homeScoreField.innerHTML = homeScore;
    awayScoreField.innerHTML = awayScore;
}


let team1 = prompt("Wie heißt Team 1?");
let name1 = document.getElementById("team1");
name1.innerHTML = team1;

let team2 = prompt("Wie heißt Team 2?");
let name2 = document.getElementById("team2");
name2.innerHTML = team2;





// Schreibweise ohne Template Literals

// templateLiterals.innerHTML = "Herzlich willkommen zum Spiel zwischen " + team1 + " und " + team2 + "!;"


// Template Literals

templateLiterals.innerHTML = `Herzlich willkommen zum Spiel zwischen ${team1} und ${team2}! Möge das bessere Team gewinnen!` 