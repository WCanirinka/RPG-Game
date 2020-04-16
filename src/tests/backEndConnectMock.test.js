/* eslint-disable no-undef */
import { submitScore, getScoreBoard, createGame } from '../backEndConnect';

describe('submit a score if input are valid', () => {
  test('submit score to the Api if the input are valid', () => submitScore('Wilfried', 30).then((data) => {
    expect(data).toBe('Leaderboard score created correctly.');
  }));
});

describe('create a game with a valid name', () => {
  test('create a game to if the name is valid', () => createGame().then((data) => {
    expect(data).toBeTruthy();
  }));
});

describe('retrieve the score', () => {
  test('return the score if the app exists', () => getScoreBoard().then((data) => {
    expect(typeof data).toBe('object');
  }));
});
