import { createElement } from '../../rendering/rendering';
import arena from '../../components/arena/arena.js';
import score from '../../components/score/score';
import { youScore, theyScore } from '../../store/store';
import './main.scss';

const createMainDiv = () => {
    const mainDiv = createElement('div','main-container');

    mainDiv.appendChild(score(youScore, theyScore));
    mainDiv.appendChild(arena());
    return mainDiv;
};

export default createMainDiv;