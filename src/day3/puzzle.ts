import { data } from './input';

const priority = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const capitalPrio = 26;

const problem1 = () => {
  let totalPrio = 0;
  data.forEach((line) => {
    const middle = line.length / 2;
    const first = line.substring(0, middle);
    const second = line.substring(middle);
    let duplicateItemTypes = '';

    [...Array(middle).keys()].forEach((index) => {
      const item = first[index];
      if (!second.includes(item)) {
        return;
      }
      if (duplicateItemTypes.includes(item)) {
        return;
      }
      if (item.toUpperCase() === item) {
        duplicateItemTypes += item;
        totalPrio += priority[item.toLowerCase()] + capitalPrio;
      } else {
        duplicateItemTypes += item;
        totalPrio += priority[item];
      }
    });
  });
  return totalPrio;
};

const problem2 = () => {
  let totalPrio = 0;
  const group: string[] = [];
  let duplicateItemTypes = '';

  data.forEach((line) => {
    group.push(line);
    if (group.length >= 3) {
      const longestLine = group.reduce((accumulator, object) => {
        return accumulator.length > object.length ? accumulator : object;
      }, group[0]);
      const filteredGroup = group.filter((item) => item !== longestLine);
      const first = filteredGroup[0];
      const second = filteredGroup[1];

      [...Array(longestLine.length).keys()].forEach((index) => {
        const item = longestLine[index];
        if (duplicateItemTypes.includes(item)) {
          return;
        }
        if (!second.includes(item)) {
          return;
        }
        if (!first.includes(item)) {
          return;
        }
        if (item.toUpperCase() === item) {
          duplicateItemTypes += item;
          totalPrio += priority[item.toLowerCase()] + capitalPrio;
        } else {
          duplicateItemTypes += item;
          totalPrio += priority[item];
        }
      });
      group.length = 0;
      duplicateItemTypes = '';
    }
  });
  return totalPrio;
};

const main = () => {
  console.log(problem1());
  console.log(problem2());
};

main();
