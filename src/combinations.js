import { factorial as f } from './factorial.js';

const combinations = (fieldMax, numPicks) => {
  const combinations = f(fieldMax) / (f(numPicks) * f(fieldMax - numPicks));

  return combinations;
};

export { combinations };
