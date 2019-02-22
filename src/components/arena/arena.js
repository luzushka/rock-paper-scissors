import { createElement, appendChildren } from '../../rendering/rendering';
import keyboard from '../keyboard/keyboard';
import './arena.scss';

const createArenaElement = () => {
    const arena = createElement('div', 'arena-component');

    const choiceWrapper = createElement('div', 'choice-wrapper');
    const yourChoice = createElement('div', 'choice your-choice');
    const theirChoice = createElement('div', 'choice their-choice');

    appendChildren(choiceWrapper, yourChoice, theirChoice);
    appendChildren(arena, choiceWrapper);
    appendChildren(arena, keyboard());

    return arena;
}

export default createArenaElement;
