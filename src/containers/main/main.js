import { createElement, setTextOfNode } from '../../rendering/rendering';
import arena from '../../components/arena/arena.js';
import score from '../../components/score/score';
import './main.scss';

const mainDiv = createElement('div','main-container');

mainDiv.appendChild(score);
mainDiv.appendChild(arena);
export default mainDiv;