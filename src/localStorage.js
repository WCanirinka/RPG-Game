const currentPlayer = (params) => {
  const current = JSON.stringify(params);
  window.localStorage.setItem('current', current);
  return current;
};

const getCurrentPlayer = () => {
  const current = localStorage.getItem('current');
  return JSON.parse(current);
};

const currentScore = (params = 0) => {
  const current = JSON.stringify(params);
  window.localStorage.setItem('currentScore', current);
  return current;
};

const getCurrentScore = () => {
  const current = localStorage.getItem('currentScore');
  return JSON.parse(current);
};

export {
  currentPlayer, getCurrentPlayer, currentScore, getCurrentScore,
};
