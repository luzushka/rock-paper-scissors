import { gameOptions, keyToElement } from './consts';

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
};

const DOMTextChanger = (key, value) => {
  document.querySelector(keyToElement[key]).innerHTML = value;
};

export const opponentGetChoice = () => {
  return gameOptions[getRandomIntInclusive(1, 3)];
};

export const setValueEventHandler = (key, value) => {
  DOMTextChanger(key, value);
};
