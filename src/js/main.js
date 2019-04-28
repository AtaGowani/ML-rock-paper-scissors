function pickChoice(element) {
  var userChoice = element.firstElementChild.src;
  var humanBox = document.getElementsByClassName("human")[0].children[1];
  
  humanBox.src = userChoice;
  var uChoice = element.firstElementChild.alt;
  var cChoice = CPUchoice();

  increment(uChoice);
  calcCondProbablities();

  showResults(cChoice, uChoice);
}

function CPUchoice() {
  var options = ["rock", "paper", "scissor"];
  var CPUbox = document.getElementsByClassName("cpu")[0].children[1];
  var choice = null;
  var mostLikelyChoice = options[getMostLikely()];

  console.log(mostLikelyChoice);

  if (mostLikelyChoice == options[0]) {
    choice = options[1];
  } else if (mostLikelyChoice == options[1]) {
    choice = options[2];
  } else if (mostLikelyChoice == options[2]) {
    choice = options[0];
  } else {
    console.error("Most Likely Choice Error.");
  }

  CPUbox.src = "./src/imgs/" + choice  + ".png";
  return choice;
}

function randomNumberGenerator() {
  var random = Math.round( Math.random() * 2);

  return random;
}

function showResults(CPUchoice, userChoice) {
  var resultsBox = document.getElementsByClassName("results")[0].firstElementChild;
  var human_score = document.getElementById("human-score");
  var cpu_score = document.getElementById("cpu-score");

  if (CPUchoice == userChoice) {
    resultsBox.innerHTML = "<p>It's a draw.</p>";
    score.draw++;
  } else if (CPUchoice == "rock" && userChoice == "scissor" || CPUchoice == "paper" && userChoice == "rock" || CPUchoice == "scissor" && userChoice == "paper") {
    resultsBox.innerHTML = "<p>You lost.</p>";
    score.cpu++;
  } else {
    resultsBox.innerHTML = "<p>You win!</p>";
    score.human++;
  }

  human_score.innerHTML = score.human;
  cpu_score.innerHTML = score.cpu;

}