let textBox = document.getElementById("winnerIs");
let textBoxPlayer = document.getElementById("playerText");
let textBoxComp = document.getElementById("compText");
let playerRock = document.getElementById("buttonRockPlayer");
let playerPaper = document.getElementById("buttonPaperPlayer");
let playerScissors = document.getElementById("buttonScissorsPlayer");
let computer = ["ROCK","PAPER","SCISSORS"];



playerRock.onclick = function() {
  textBoxPlayer.value = "ROCK";
  let randomVal = computer[Math.floor(Math.random() * computer.length)];
  textBoxComp.value = randomVal;

  if(randomVal === textBoxPlayer.value){
    textBox.value = "DRAW";
  }
  else if(randomVal === "PAPER"){
    textBox.value = "YOU LOSE";

  }
  else if(randomVal = "SCISSORS"){
    textBox.value = "YOU WIN";
  }
}
playerPaper.onclick = function() {
  textBoxPlayer.value = "PAPER";
  let randomVal = computer[Math.floor(Math.random() * computer.length)];
  textBoxComp.value = randomVal;

  if(randomVal === textBoxPlayer.value){
    textBox.value = "DRAW";
  }
  else if(randomVal === "ROCK"){
    textBox.value = "YOU WIN";

  }
  else if(randomVal = "SCISSORS"){
    textBox.value = "YOU LOSE";
  }
}
playerScissors.onclick = function() {
  textBoxPlayer.value = "SCISSORS";
  let randomVal = computer[Math.floor(Math.random() * computer.length)];
  textBoxComp.value = randomVal;

  if(randomVal === textBoxPlayer.value){
    textBox.value = "DRAW";
  }
  else if(randomVal === "PAPER"){
    textBox.value = "YOU WIN";

  }
  else if(randomVal = "ROCK"){
    textBox.value = "YOU LOSE";
  }
}
