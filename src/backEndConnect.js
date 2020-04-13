/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const fetch = require('node-fetch');

const connection = (() => {
  const createGame = async () => {
    const name = {
      name: 'African-Jungle',
    };

    const game = JSON.stringify();
    const addressUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: game,
    };

    const response = await fetch(addressUrl, settings);
    const answer = await response.json();
    return answer;
  };

  const submitScore = async () => {
    const submit = {
      user: name,
      score,
    };

    const post = JSON.stringify(submit);
    const addressUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uyTWdefGYb1d0pIVy2jN/scores/';
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: post,
    };
    const response = await fetch(addressUrl, settings);
    const answer = await response.json;
    return answer;
  };

  const sortingObject = (object) => {
    const arr = [];
    for (let i = 0; i < object.length; i += 1) {
      arr.push([object[i].score, object[i].user]);
    }
    return Array.from(arr).sort((a, b) => b[0] - a[0]);
  };

  const getScoreBoard = async () => {
    const addressUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uyTWdefGYb1d0pIVy2jN/scores/';
    const settings = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(addressUrl, settings);
    const answer = await response.json();
    return sortingObject(answer.result);
  };

  return {
    createGame, submitScore, getScoreBoard,
  };
})();

export default connection;
