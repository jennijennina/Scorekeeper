function onePlusHome() {
  let start = document.getElementById("countHome").innerText;
  let result = Number(start) + Number(1);
  document.getElementById("countHome").innerText = result;
}
function twoPlusHome() {
  let start = document.getElementById("countHome").innerText;
  let result = Number(start) + Number(2);
  document.getElementById("countHome").innerText = result;
}
function threePlusHome() {
  let start = document.getElementById("countHome").innerText;
  let result = Number(start) + Number(3);
  document.getElementById("countHome").innerText = result;
}
function onePlusAway() {
  let start = document.getElementById("countAway").innerText;
  let result = Number(start) + Number(1);
  document.getElementById("countAway").innerText = result;
}
function twoPlusAway() {
  let start = document.getElementById("countAway").innerText;
  let result = Number(start) + Number(2);
  document.getElementById("countAway").innerText = result;
}
function threePlusAway() {
  let start = document.getElementById("countAway").innerText;
  let result = Number(start) + Number(3);
  document.getElementById("countAway").innerText = result;
}
function reset() {
  document.getElementById("countHome").innerText = 0;
  document.getElementById("countAway").innerText = 0;
  document.getElementById("teamNameHome").innerText = "Home";
  document.getElementById("teamNameAway").innerText = "Away";
}
function teamname() {
  let teamNameHome = prompt("Wie heisst dein Team?");
  document.getElementById("teamNameHome").innerText = teamNameHome;
  let teamNameAway = prompt("Wie heisst dein Team?");
  document.getElementById("teamNameAway").innerText = teamNameAway;
}
