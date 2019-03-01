import { createElement, appendChildren, setTextOfNode } from '../../rendering/rendering';
import store from '../../store/dataStore';
import { gameOptions, stronger } from '../../helpers/consts';
import { opponentGetChoice } from '../../helpers/helpers';
import './keyboard.scss';

const keyMaker = (keyText) => {
  const keyElement = createElement('button', 'key-component');
  setTextOfNode(keyElement, keyText);
  return keyElement;
};

const scoreHandler = () => {
  const score = stronger[store.yourChoice][store.theirChoice];
  if (score === 1) {
    store.youScore += 1;
  } else if (score === -1) {
    store.theyScore += 1;
  }

  if (store.youScore === 3) {
    console.log('You won!'); // will change to a modal soon
  } else if (store.theyScore === 3) {
    console.log('You lose :(');
  }
};

const onClickKey = (e) => {
  const { innerHTML } = e.target;
  const keyComponents = document.querySelectorAll('.key-component');
  keyComponents.forEach(key => key.disabled = true);
  store.yourChoice = innerHTML;
  const opponentsChoice = opponentGetChoice();
  ['3', '2', '1', opponentsChoice]
    .forEach((text, index, srcArray) => {
      setTimeout(() => {
        store.theirChoice = text;
        if (index === srcArray.length - 1) {
          scoreHandler();
          keyComponents.forEach(key => key.disabled = false);
        }
      }, 1000 * index);
    });
};

const createKeyboardElement = () => {
  const keyboard = createElement('div', 'keyboard-component');
  const keysWrapper = createElement('div', 'keys-wrapper');

  const keys = Object.values(gameOptions).map(keyText => keyMaker(keyText));

  keys.forEach(key => key.addEventListener('click', e => onClickKey(e)));

  appendChildren(keysWrapper, ...keys);
  appendChildren(keyboard, keysWrapper);

  return keyboard;
};

export default createKeyboardElement;
