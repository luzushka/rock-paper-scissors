import { createElement } from './rendering/rendering';
import main from './containers/main/main';
import './style/main.scss';

const indexContainer = createElement('div', 'root');
indexContainer.appendChild(main());
document.body.appendChild(indexContainer);
