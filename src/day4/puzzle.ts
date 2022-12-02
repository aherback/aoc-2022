import { data } from './input';

const problem1 = () => {
  return 'hello world 1';
};

const problem2 = () => {
  return data;
};

const main = () => {
  console.log(problem1());
  console.log(problem2());
};

main();
