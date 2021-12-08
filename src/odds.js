import { probability } from './probability.js';

const odds = (fieldMax, numPicks, numMatches) => {
  const odds = 1 / probability(fieldMax, numPicks, numMatches);

  return odds;
};

export { odds };
