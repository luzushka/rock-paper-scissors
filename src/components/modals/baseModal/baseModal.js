import { createElement, setTextOfNode, appendChildren } from '../../../rendering/rendering';
import './baseModal.scss';

const classesSetter = (originalClass, addedClasses) => `${[originalClass, addedClasses].join(' ')}`;

export default (titleText, classes, closeCallback = () => {}) => {
  const gameOverModal = createElement('div', classesSetter('modal', classes));
  const contentsWrapper = createElement('div', 'modal__contents');
  const contentsTitle = createElement('div', 'modal__title');
  setTextOfNode(contentsTitle, titleText);
  const contentsButtonWrapper = createElement('div', 'modal__button-wrapper')
  const contentsButton = createElement('button', 'modal__button');
  contentsButton.addEventListener('click', () => closeCallback());
  appendChildren(contentsButtonWrapper, contentsButton);
  setTextOfNode(contentsButton, 'new game');
  appendChildren(contentsWrapper, contentsTitle, contentsButtonWrapper);
  appendChildren(gameOverModal, contentsWrapper);
  return gameOverModal;
};
