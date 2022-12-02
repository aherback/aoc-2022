import { data } from './input';

const win = 6;
const draw = 3;
const loss = 0;

const rock = 1;
const paper = 2;
const scissors = 3;

const strategy1 = (opponent: string, me: string) => {
  switch (opponent) {
    case 'A':
      if (me === 'X') return rock + draw;
      else if (me === 'Y') return paper + win;
      else if (me === 'Z') return scissors + loss;
      else return 0;
    case 'B':
      if (me === 'X') return rock + loss;
      else if (me === 'Y') return paper + draw;
      else if (me === 'Z') return scissors + win;
      else return 0;
    case 'C':
      if (me === 'X') return rock + win;
      else if (me === 'Y') return paper + loss;
      else if (me === 'Z') return scissors + draw;
      else return 0;
    default:
      return 0;
  }
};

const problem1 = () => {
  let result = 0;
  data.forEach((row) => {
    const opponent = row.charAt(0);
    const me = row.charAt(row.length - 1);
    result += strategy1(opponent, me);
  });
  return result;
};

const strategy2 = (opponent: string, me: string) => {
  switch (opponent) {
    case 'A':
      if (me === 'Y') return rock + draw;
      else if (me === 'Z') return paper + win;
      else if (me === 'X') return scissors + loss;
      else return 0;
    case 'B':
      if (me === 'X') return rock + loss;
      else if (me === 'Y') return paper + draw;
      else if (me === 'Z') return scissors + win;
      else return 0;
    case 'C':
      if (me === 'Z') return rock + win;
      else if (me === 'X') return paper + loss;
      else if (me === 'Y') return scissors + draw;
      else return 0;
    default:
      return 0;
  }
};

const problem2 = () => {
  let result = 0;
  data.forEach((row) => {
    const opponent = row.charAt(0);
    const me = row.charAt(row.length - 1);
    result += strategy2(opponent, me);
  });
  return result;
};

const main = () => {
  console.log(problem1());
  console.log(problem2());
};

main();
