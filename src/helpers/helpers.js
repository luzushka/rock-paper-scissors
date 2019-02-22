import { setTextOfNode } from '../rendering/rendering';
import { gameOptions, stronger } from './consts';

export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

export const DOMTextChanger = (yourChoiceText) => {
    const yourChoiceElement = document.querySelector('.your-choice');
    const theirChoiceElement = document.querySelector('.their-choice');
    const keyComponents = document.querySelectorAll('.key-component');
    const yourScoreElement = document.querySelector('.score-number-you');
    const theirScoreElement = document.querySelector('.score-number-they');

    setTextOfNode(yourChoiceElement, yourChoiceText);

    const opponentsChoice = gameOptions[getRandomIntInclusive(1, 3)];

    const tempScore = stronger[yourChoiceText][opponentsChoice];

    ['3', '2', '1', opponentsChoice].forEach((text, index, srcArray) => {
        setTimeout(() => {
        setTextOfNode(theirChoiceElement, text);
        if (index === srcArray.length - 1) {
            keyComponents.forEach(key => key.disabled = false);
            if (tempScore === 1) {
                setTextOfNode(yourScoreElement, parseInt(yourScoreElement.innerHTML, 10) + 1);
            } else if (tempScore === -1) {
                setTextOfNode(theirScoreElement, parseInt(theirScoreElement.innerHTML, 10) + 1);
            }
        }
    }
    , 1000 * index)});

};