export const youScore = 0;
export const theyScore = 0;

export const yourChoice = '';
export const theirChoice = '';

export const setScore = (whoseScore, diff, callback) => {
    whoseScore += diff;
    callback();
};

export const setChoice = (whoseChoice, choice, callback) => {
    whoseChoice = choice;
    if (callback) callback();
};