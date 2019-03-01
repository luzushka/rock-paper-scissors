export const gameOptions = {
  1: 'rock',
  2: 'paper',
  3: 'scissors'
};

export const stronger = {
  rock: {
    rock: 0,
    paper: -1,
    scissors: 1
  },
  paper: {
    rock: 1,
    paper: 0,
    scissors: -1
  },
  scissors: {
    rock: -1,
    paper: 1,
    scissors: 0
  }
};

export const keyToElement = {
    youScore: '.score-number-you',
    theyScore: '.score-number-they',
    yourChoice: '.your-choice',
    theirChoice: '.their-choice'
};