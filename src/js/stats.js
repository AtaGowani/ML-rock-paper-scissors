function showStats() {
  var game = document.getElementsByClassName('game')[0];
  game.classList.add('hide');

  var stats = document.getElementsByClassName('stats')[0];
  stats.classList.remove('hide');

  var r_r = document.getElementById('r-r').getElementsByTagName('p')[0];
  var r_p = document.getElementById('r-p').getElementsByTagName('p')[0];
  var r_s = document.getElementById('r-s').getElementsByTagName('p')[0];
  var p_r = document.getElementById('p-r').getElementsByTagName('p')[0];
  var p_p = document.getElementById('p-p').getElementsByTagName('p')[0];
  var p_s = document.getElementById('p-s').getElementsByTagName('p')[0];
  var s_r = document.getElementById('s-r').getElementsByTagName('p')[0];
  var s_p = document.getElementById('s-p').getElementsByTagName('p')[0];
  var s_s = document.getElementById('s-s').getElementsByTagName('p')[0];

  // cond_count[choice][given]
  r_r.innerHTML = Math.round((game_choices.properties.cond_count[game_choices.ROCK][game_choices.ROCK] / game_choices.properties.count[game_choices.ROCK]) * 100) + "%";
  r_p.innerHTML = Math.round((game_choices.properties.cond_count[game_choices.PAPER][game_choices.ROCK] / game_choices.properties.count[game_choices.ROCK]) * 100) + "%";
  r_s.innerHTML = Math.round((game_choices.properties.cond_count[game_choices.SCISSOR][game_choices.ROCK] / game_choices.properties.count[game_choices.ROCK]) * 100) + "%";
  p_r.innerHTML = Math.round((game_choices.properties.cond_count[game_choices.ROCK][game_choices.PAPER] / game_choices.properties.count[game_choices.PAPER]) * 100) + "%";
  p_p.innerHTML = Math.round((game_choices.properties.cond_count[game_choices.PAPER][game_choices.PAPER] / game_choices.properties.count[game_choices.PAPER]) * 100) + "%";
  p_s.innerHTML = Math.round((game_choices.properties.cond_count[game_choices.SCISSOR][game_choices.PAPER] / game_choices.properties.count[game_choices.PAPER]) * 100) + "%";
  s_r.innerHTML = Math.round((game_choices.properties.cond_count[game_choices.ROCK][game_choices.SCISSOR] / game_choices.properties.count[game_choices.SCISSOR]) * 100) + "%";
  s_p.innerHTML = Math.round((game_choices.properties.cond_count[game_choices.PAPER][game_choices.SCISSOR] / game_choices.properties.count[game_choices.SCISSOR]) * 100) + "%";
  s_s.innerHTML = Math.round((game_choices.properties.cond_count[game_choices.SCISSOR][game_choices.SCISSOR] / game_choices.properties.count[game_choices.SCISSOR]) * 100) + "%";
}