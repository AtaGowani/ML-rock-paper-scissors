// ROCK, PAPER, SCISSOR ENUM
const game_choices = {
  ROCK: 0,
  PAPER: 1,
  SCISSOR: 2,
  properties: {
    count: [0, 0 ,0],
    cond_probablity: [0, 0, 0],
    cond_count: [[0, 0, 0],
                 [0, 0, 0],
                 [0, 0, 0]]
  }
}

var score = {
  "human": 0,
  "cpu": 0,
  "draw": 0
}

// Variable to hold user's last choice
var last_choice = null;

function increment(uChoice) {
  if (uChoice == "rock") {
    uChoice = game_choices.ROCK;
  } else if (uChoice == "paper") {
    uChoice = game_choices.PAPER;
  } else if (uChoice == "scissor") {
    uChoice = game_choices.SCISSOR;
  } else {
    console.error("User choice error");
  }

  game_choices.properties.count[uChoice]++;
  last_choice != null ? game_choices.properties.cond_count[uChoice][last_choice]++ : null;
  last_choice = uChoice;
}

function calcCondProbablities() {
  // P (ROCK | X)
  game_choices.properties.cond_probablity[game_choices.ROCK] = game_choices.properties.cond_count[game_choices.ROCK][last_choice] / (game_choices.properties.count[last_choice] - 1);

  // P (PAPER | X)
  game_choices.properties.cond_probablity[game_choices.PAPER] = game_choices.properties.cond_count[game_choices.PAPER][last_choice] / (game_choices.properties.count[last_choice] - 1);

  // P (SCISSOR | X)
  game_choices.properties.cond_probablity[game_choices.SCISSOR] = game_choices.properties.cond_count[game_choices.SCISSOR][last_choice] / (game_choices.properties.count[last_choice] - 1);
}

function getMostLikely() {
  let mostLikely = game_choices.ROCK;

  if (game_choices.properties.cond_probablity[game_choices.PAPER] > game_choices.properties.cond_probablity[mostLikely])
    mostLikely = game_choices.PAPER;

  if (game_choices.properties.cond_probablity[game_choices.SCISSOR] > game_choices.properties.cond_probablity[mostLikely])
    mostLikely = game_choices.SCISSOR;

  return mostLikely;
}