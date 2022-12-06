import { data } from './input';

const getMark = (messageLength: number) => {
  return (
    [...Array(data.length).keys()].find((key) => {
      const compareSet = [...new Set(data.substring(key, key + messageLength))];

      if (compareSet.length >= messageLength) {
        return key;
      }
    }) + messageLength
  );
};
const problem1 = () => {
  return getMark(4);
};

const problem2 = () => {
  return getMark(14);
};

console.log(problem1());
console.log(problem2());
