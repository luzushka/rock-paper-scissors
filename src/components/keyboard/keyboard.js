import { createElement, appendChildren, setTextOfNode } from '../../rendering/rendering';
import { yourChoice, setChoice } from '../../store/store';
import { gameOptions } from '../../helpers/consts';
import { DOMTextChanger } from '../../helpers/helpers';
import './keyboard.scss';

const keyMaker = (keyText) => {
    const keyElement = createElement('button', 'key-component');
    setTextOfNode(keyElement, keyText);
    return keyElement;
};

const onClickKey = (e) => {
    const { innerHTML } = e.target;
    const keyComponents = document.querySelectorAll('.key-component');

    keyComponents.forEach(key => key.disabled = true);

    setChoice(yourChoice, innerHTML, DOMTextChanger.bind(this, innerHTML));
};

const createKeyboardElement = () => {
    const keyboard = createElement('div', 'keyboard-component');
    const keysWrapper = createElement('div', 'keys-wrapper');

    const keys = Object.values(gameOptions).map(keyText => keyMaker(keyText));

    keys.forEach(key => key.addEventListener('click', e => onClickKey(e)));

    appendChildren(keysWrapper, ...keys);
    appendChildren(keyboard, keysWrapper);

    return keyboard;
}

export default createKeyboardElement;
