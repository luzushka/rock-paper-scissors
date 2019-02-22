import { createElement, appendChildren, setTextOfNode } from '../../rendering/rendering';
import './keyboard.scss';

const keyMaker = (keyText) => {
    const keyElement = createElement('div', 'key-component');
    setTextOfNode(keyElement, keyText);
    return keyElement;
};

const createKeyboardElement = () => {
    const keyboard = createElement('div', 'keyboard-component');
    const keysWrapper = createElement('div', 'keys-wrapper');
    
    const keys = ['rock', 'paper', 'scissors'].map(keyText => keyMaker(keyText));

    appendChildren(keysWrapper, ...keys);
    appendChildren(keyboard, keysWrapper);

    return keyboard;
}

export default createKeyboardElement;
