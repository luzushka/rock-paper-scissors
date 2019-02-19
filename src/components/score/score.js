import { createElement, setTextOfNode } from '../../rendering/rendering';
import './score.scss';

const score = createElement('div', 'score-component');
const labelsBar = createElement('div', 'score-labels-bar');
const scoresBar = createElement('div', 'score-scores-bar');

const youLabel = createElement('p', 'score-label-you');
setTextOfNode(youLabel, 'you');
const theyLabel = createElement('p', 'score-label-they');
setTextOfNode(theyLabel, 'they');

const youScore = createElement('p', 'score-number-you');
const theyScore = createElement('p', 'score-number-they');

labelsBar.appendChild(youLabel);
labelsBar.appendChild(theyLabel);

scoresBar.appendChild(youScore);
scoresBar.appendChild(theyScore);

score.appendChild(labelsBar);
score.appendChild(scoresBar);

export default score;
