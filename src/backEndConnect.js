/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-globals */
const fetch = require('node-fetch');

const createGame = async () => {
  const name = {
    name: 'African Jungle',
  };
  const game = JSON.stringify(name);
  const address = 'https://us-central1-js-capstone-backend.cloudconsts.net/api/games/';
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: game,
  };
  const response = await fetch(address, settings);
  const answer = await response.json();
  return answer;
};

const submitScore = async (name, score) => {
  const submit = {
    user: name,
    score,
  };
  const post = JSON.stringify(submit);
  const address = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uyTWdefGYb1d0pIVy2jN/scores/';
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: post,
  };
  const response = await fetch(address, settings);
  const answer = await response.json();
  return answer;
};

const sorting = (obj) => {
  const array = [];
  for (let i = 0; i < obj.length; i += 1) {
    array.push([obj[i].score, obj[i].user]);
  }
  return Array.from(array).sort((a, b) => b[0] - a[0]);
};

const getScoreBoard = async () => {
  const address = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uyTWdefGYb1d0pIVy2jN/scores/';
  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(address, settings);
    const answer = await response.json();
    return sorting(answer.result);
  } catch (error) {
    return error.message;
  }
};

export {
  submitScore, createGame, getScoreBoard,
};
