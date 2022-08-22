"use strict";

let countHome = document.getElementById("countHome");
let countAway = document.getElementById("countAway");

let startHome = 0;
let startAway = 0;

function onePlusHome() {
  startHome++;
  countHome.innerHTML = startHome;
}
function twoPlusHome() {
  startHome += 2;
  countHome.innerHTML = startHome;
}

function threePlusHome() {
  startHome += 3;
  countHome.innerHTML = startHome;
}
function onePlusAway() {
  startAway++;
  countAway.innerHTML = startAway;
}
function twoPlusAway() {
  startAway += 2;
  countAway.innerHTML = startAway;
}
function threePlusAway() {
  startAway += 3;
  countAway.innerHTML = startAway;
}
function reset() {
  startHome = 0;
  startAway = 0;
  countHome.innerHTML = startHome;
  countAway.innerHTML = startAway;
}
function teamname() {
  let teamNameHome = prompt("Wie heisst dein Team?");
  document.getElementById("teamNameHome").innerText = teamNameHome;
  let teamNameAway = prompt("Wie heisst dein Team?");
  document.getElementById("teamNameAway").innerText = teamNameAway;
}
