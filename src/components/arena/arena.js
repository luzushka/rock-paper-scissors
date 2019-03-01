import { createElement, appendChildren, setTextOfNode } from '../../rendering/rendering';
import store from '../../store/dataStore';
import keyboard from '../keyboard/keyboard';
import './arena.scss';

const createArenaElement = () => {
    const { yourChoice: yourChoiceInStore, theirChoice: theirChoiceInStore } = store;
    const arena = createElement('div', 'arena-component');

    const choiceWrapper = createElement('div', 'choice-wrapper');
    const yourChoice = createElement('div', 'choice your-choice');
    setTextOfNode(yourChoice, yourChoiceInStore);
    const theirChoice = createElement('div', 'choice their-choice');
    setTextOfNode(theirChoice, theirChoiceInStore);

    appendChildren(choiceWrapper, yourChoice, theirChoice);
    appendChildren(arena, choiceWrapper);
    appendChildren(arena, keyboard());

    return arena;
}

export default createArenaElement;
