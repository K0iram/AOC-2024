import { rules, data } from './data.js';

const isCorrectOrder = (page) => {
  for (let index = 0; index < page.length - 1; index++) {
    let currentPair = [page[index], page[index + 1]].join('');
    if (!rules.includes(currentPair)) {
      return false;
    }
  }
  return true;
}

const isCorrectPair = (pair) => {
  return rules.includes(pair);
}

const findCorrectMiddlePagesSum = () => {
  const middlePages = []

  data.forEach((page) => {
    if (isCorrectOrder(page)) {
      const middleIndex = Math.floor(page.length / 2);
      middlePages.push(page[middleIndex]);
    }
  })

  return middlePages.reduce((sum, page) => sum + page, 0);
}

const findAndFixIncorrectMiddlePagesSum = () => {
  const middlePages = []

  data.forEach((page) => {
    while (!isCorrectOrder(page)) {
      for (let i = 0; i < page.length - 1; i++) {
        let currentPair = [page[i], page[i + 1]].join('');
        if (!isCorrectPair(currentPair)) {
          [page[i], page[i + 1]] = [page[i + 1], page[i]];
          break;
        }
      }
    }
    middlePages.push(page[Math.floor(page.length / 2)]);
  })

  return middlePages.reduce((sum, page) => sum + page, 0);
}

console.log(findAndFixIncorrectMiddlePagesSum());
