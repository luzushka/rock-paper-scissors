import './style/main.scss';
import { setTextOfNode, createElement } from './rendering/rendering';

const mainContainer = createElement('div', document.body, 'main-container');
setTextOfNode(mainContainer, 'Hello, this works!');