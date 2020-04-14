/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/named */
import 'phaser';
import {
  currentPlayer, getCurrentPlayer, currentScore, getCurrentScore,
} from './localStorage';
import { score } from './Scenes/Battle';
import { submitScore, getScoreBoard } from './backEndConnect';

const dom = (() => {
  const getElement = (id) => { document.getElementById(id); };

  const getName = (id) => {
    const name = getElement(id).value;
    return name;
  };

  return {
    getElement,
    getName,
  };
})();

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
  dom.getElement('leaderboard').innerHTML = data;
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

const liveUpdate = () => {
  setInterval(() => {
    if (score > getCurrentScore()) {
      currentScore(score);
      submitScore(getCurrentPlayer(), getCurrentScore()).then(render());
    }
  }, 1000);
};

export default liveUpdate;
