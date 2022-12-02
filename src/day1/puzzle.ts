import { data } from './input';

const snackTotals = () => {
  const snackTotals = [];
  let currentCalories = 0;
  data.forEach((snack) => {
    if (snack === null || snack === undefined || snack === 0) {
      snackTotals.push(currentCalories);
      currentCalories = 0;
    } else {
      currentCalories += snack;
    }
  });
  return snackTotals;
};

const problem2 = () => {
  const snacks = snackTotals();
  snacks.sort((a, b) => {
    return a - b;
  });
  let total = 0;
  Array(3)
    .fill(0)
    .map(() => {
      total += snacks.pop();
    });

  return total;
};

const problem1 = () => {
  return Math.max(...snackTotals());
};

const main = () => {
  console.log(problem1());
  console.log(problem2());
};

main();
