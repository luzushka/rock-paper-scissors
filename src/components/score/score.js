import { createElement, setTextOfNode, appendChildren } from '../../rendering/rendering';
import './score.scss';

const createScoreElement = (youScore, theyScore) => {
  const score = createElement('div', 'score-component');
  const labelsBar = createElement('div', 'score-labels-bar');
  const scoresBar = createElement('div', 'score-labels-bar score-scores-bar');

  const youLabel = createElement('p', 'score-label-you');
  setTextOfNode(youLabel, 'you');
  const theyLabel = createElement('p', 'score-label-they');
  setTextOfNode(theyLabel, 'they');

  const youScoreText = createElement('p', 'score-number-you');
  const theyScoreText = createElement('p', 'score-number-they');

  setTextOfNode(youScoreText, youScore);
  setTextOfNode(theyScoreText, theyScore);

  appendChildren(labelsBar, youLabel, theyLabel);

  appendChildren(scoresBar, youScoreText, theyScoreText);

  appendChildren(score, labelsBar, scoresBar);

  return score;
};

export default createScoreElement;
