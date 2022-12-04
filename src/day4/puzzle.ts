import { data } from './input';

const populateRange = (range: string) => {
  const ranges = range.split('-');
  let startRange: number = +ranges[0];
  const endRange: number = +ranges[1];
  const length = endRange - startRange;

  return Array(length + 1)
    .fill(null)
    .map(() => {
      return startRange++;
    });
};

const problem1 = () => {
  return data.reduce((accumulator, line) => {
    const pair = line.split(',');
    const firstRange = populateRange(pair[0]);
    const secondRange = populateRange(pair[1]);

    const biggestList =
      firstRange.length > secondRange.length ? firstRange : secondRange;
    const smallestList = firstRange === biggestList ? secondRange : firstRange;

    return smallestList.filter((element) => {
      return !biggestList.includes(element);
    }).length > 0
      ? accumulator
      : accumulator + 1;
  }, 0);
};

const problem2 = () => {
  return data.reduce((accumulator, line) => {
    const pair = line.split(',');
    const firstRange = populateRange(pair[0]);
    const secondRange = populateRange(pair[1]);

    const biggestList =
      firstRange.length > secondRange.length ? firstRange : secondRange;
    const smallestList = firstRange === biggestList ? secondRange : firstRange;

    return smallestList.filter((element) => {
      return biggestList.includes(element);
    }).length > 0
      ? accumulator + 1
      : accumulator;
  }, 0);
};

const main = () => {
  console.log(problem1());
  console.log(problem2());
};

main();
