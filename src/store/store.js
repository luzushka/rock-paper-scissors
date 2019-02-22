export const youScore = 0;
export const theyScore = 0;

export const setScore = (whoseScore, diff, callback) => {
    whoseScore += diff;
    callback();
}