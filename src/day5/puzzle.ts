import { data } from './input';

const problem1 = () => {
  let i = 0;
  let currentColumn = 0;

  const allCrates: string[][] = [];

  data.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine.length === 0) {
      return;
    }
    if (trimmedLine.startsWith('1')) {
      return;
    }
    if (trimmedLine.startsWith('move')) {
      const actions = trimmedLine.match(/\d+/g).map(Number);

      Array(actions[0])
        .fill(null)
        .forEach(() => {
          const popped = allCrates[actions[1] - 1].pop();
          allCrates[actions[2] - 1].push(popped);
        });
      return;
    }

    i = 0;
    currentColumn = 0;
    [...Array(line.length).keys()].forEach((index) => {
      const character = line[index];
      if (i === 1) {
        if (allCrates[currentColumn] === undefined) {
          allCrates[currentColumn] = [];
        }
        if (character !== ' ') {
          allCrates[currentColumn].unshift(character);
        }
      }
      if (i === 3) {
        i = 0;
        currentColumn++;
        return;
      }
      i++;
    });
  });

  return allCrates.reduce((accumulator, column) => {
    return (accumulator += column.pop());
  }, '');
};

const problem2 = () => {
  let i = 0;
  let currentColumn = 0;

  const allCrates: string[][] = [];

  data.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine.length === 0) {
      return;
    }
    if (trimmedLine.startsWith('1')) {
      return;
    }
    if (trimmedLine.startsWith('move')) {
      const actions = trimmedLine.match(/\d+/g).map(Number);
      const crates: string[] = [];

      Array(actions[0])
        .fill(null)
        .forEach(() => {
          const popped = allCrates[actions[1] - 1].pop();
          crates.unshift(popped);
        });

      allCrates[actions[2] - 1].push(...crates);
      return;
    }

    i = 0;
    currentColumn = 0;
    [...Array(line.length).keys()].forEach((index) => {
      const character = line[index];
      if (i === 1) {
        if (allCrates[currentColumn] === undefined) {
          allCrates[currentColumn] = [];
        }
        if (character !== ' ') {
          allCrates[currentColumn].unshift(character);
        }
      }
      if (i === 3) {
        i = 0;
        currentColumn++;
        return;
      }
      i++;
    });
  });

  return allCrates.reduce((accumulator, column) => {
    return (accumulator += column.pop());
  }, '');
};

console.log(problem1());
console.log(problem2());
