import { createElement, setTextOfNode, appendChildren } from '../../rendering/rendering';
import './score.scss';

const createScoreElement = (youScore, theyScore) => {
  const score = createElement('div', 'score-component');

  const youLabel = createElement('p', 'score-label-you');
  setTextOfNode(youLabel, 'you');
  const theyLabel = createElement('p', 'score-label-they');
  setTextOfNode(theyLabel, 'they');

  const youScoreText = createElement('p', 'score-number-you');
  const theyScoreText = createElement('p', 'score-number-they');

  setTextOfNode(youScoreText, youScore);
  setTextOfNode(theyScoreText, theyScore);

  appendChildren(score, youLabel, theyLabel);

  appendChildren(score, youScoreText, theyScoreText);

  return score;
};

export default createScoreElement;
