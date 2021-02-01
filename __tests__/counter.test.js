// function Quarters(dollarAmmount)
//  - return # of Quarters;


//  $5 --> 20 Quarters
//  $6.75 --> 27 quarters
//  $1.15 --> 4 quarters 

import { TestScheduler } from "jest";
import Counter from './../src/counter.js';

describe('Counter', () => {
  const monies = 3;
  
//   beforeEach(() => {
//     Counter(monies);
//   })
    test('take a dollar ammount and return the number of max quarters you could make from it', () => {
      expect(Counter(monies)).toBe(12);
    })
  });