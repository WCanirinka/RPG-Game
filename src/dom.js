import {
  currentPlayer, getCurrentPlayer, currentScore, getCurrentScore,
} from './localStorage';
import { submitScore, getScoreBoard } from './backEndConnect';

const score = require('./scenes/battle');

const boardList = async () => {
  let list = `<h1 class="header">LeaderBoard</h1>
  <h4><span>Number</span><span>Score</span><span>Name</span></h4>`;
  const leaderBoard = await getScoreBoard();
  leaderBoard.forEach((element) => {
    list += `<h4><span>${leaderBoard.indexOf(element) + 1}</span><span>${
      element[0]
    }</span><span>${element[1]}</span></h4>`;
  });
  return list;
};

const render = async () => {
  const data = await boardList();
  document.getElementById('leaderboard').innerHTML = data;
};

render();

const submit = document.getElementById('start');
const from = document.getElementById('user-name');
const div = document.getElementById('username');

if (getCurrentPlayer()) {
  from.style.display = 'none';
  div.style.display = 'none';
}

const hide = () => {
  const player = document.getElementById('user-name').value;
  currentPlayer(player);
  from.style.display = 'none';
  div.style.display = 'none';
};
submit.addEventListener('click', hide);
window.addEventListener('keypress', (ev) => {
  if (ev.keyCode === 13 && !getCurrentPlayer()) {
    hide();
    ev.preventDefault();
  }
});

const liveUpdate = () => {
  setInterval(() => {
    if (score > getCurrentScore()) {
      currentScore(score);
      submitScore(getCurrentPlayer(), getCurrentScore()).then(render());
    }
  }, 1000);
};

export default liveUpdate;
