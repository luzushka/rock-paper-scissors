import { createElement, appendChildren, setTextOfNode } from '../../rendering/rendering';
import store, { initialStore } from '../../store/dataStore';
import { gameOptions, stronger } from '../../helpers/consts';
import { opponentGetChoice } from '../../helpers/helpers';
import baseModal from '../modals/baseModal/baseModal';
import './keyboard.scss';

const keyMaker = (keyText) => {
  const keyElement = createElement('button', 'key-component');
  setTextOfNode(keyElement, keyText);
  return keyElement;
};

const scoreHandler = () => {
  const score = stronger[store.yourChoice][store.theirChoice];
  const removeModalCallback = () => {
    document.querySelector('.modal').remove();
    const initStore = initialStore();
    Object.keys(store).forEach((key)=> store[key] = initStore[key]);
  };
  
  if (score === 1) {
    store.youScore += 1;
  } else if (score === -1) {
    store.theyScore += 1;
  }

  if (store.youScore === 3) {
    const modal = baseModal('you win', ['you-win-modal'], removeModalCallback);
    appendChildren(document.body, modal);
  } else if (store.theyScore === 3) {
    const modal = baseModal('game over', ['game-over-modal'], removeModalCallback);
    appendChildren(document.body, modal);
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
