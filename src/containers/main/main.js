import { createElement } from '../../rendering/rendering';
import arena from '../../components/arena/arena';
import score from '../../components/score/score';
import store from '../../store/dataStore';
import './main.scss';

const createMainDiv = () => {
  const mainDiv = createElement('div', 'main-container');
  mainDiv.appendChild(score(store.youScore, store.theyScore));
  mainDiv.appendChild(arena());
  return mainDiv;
};

export default createMainDiv;
