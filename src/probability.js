import { combinations as c } from './combinations.js';

const probability = (fieldMax, numPicks, numMatches) => {
  let probability = 0;

  if (numPicks >= numMatches) {
    for (let i = 0; i <= numPicks - numMatches; i += 1) {
      probability += 1 / c(fieldMax, numMatches);
      fieldMax -= 1;
    }
  }

  return probability;
};

export { probability };
