import { createElement, setTextOfNode } from '../../rendering/rendering';
import './arena.scss';

const arena = createElement('div', 'score-component');

const choiceWrapper = createElement('div', 'choice-wrapper');
const yourChoice = createElement('div', 'your-choice');
const theirChoice = createElement('div', 'their-choice');

choiceWrapper.appendChild(yourChoice);
choiceWrapper.appendChild(theirChoice);



export default arena;
