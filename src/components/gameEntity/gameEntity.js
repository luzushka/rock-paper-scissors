import { createElement, setTextOfNode } from '../../rendering/rendering';
import './gameEntity.scss';

const gameEntity = createElement('p', 'game-entity-label');
setTextOfNode(gameEntity, '');