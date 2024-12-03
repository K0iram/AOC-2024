import { data } from "./data.js";


// Part 1
// const parseData = (data) => {
//   const matches = data.match(/mul\(\d{1,3},\d{1,3}\)/g) || [];
//   const results = [];

//   matches.forEach((match) => {
//     const nums = match.match(/\d{1,3}/g);
//     const result = nums.reduce((acc, num) => acc * parseInt(num), 1);
//     results.push(result);
//   });

//   return results;
// };


// Part 2
const parseData = (data) => {
  let enabled = true;
  const matches = data.match(/(do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\))/g) || [];
  const results = [];

  matches.forEach((match) => {
    if (match === 'do()') {
      enabled = true;
    } else if (match === "don't()") {
      enabled = false;
    } else if (enabled && match.startsWith('mul')) {
      const nums = match.match(/\d{1,3}/g);
      const result = nums.reduce((acc, num) => acc * parseInt(num), 1);
      results.push(result);
    }
  });

  return results;
};

const analyzeData = (data) => {
  let total = 0;
  const parsedData = parseData(data);
  parsedData.forEach((point) => {
    total += point
  });
  return total;
};

console.log(analyzeData(data));
