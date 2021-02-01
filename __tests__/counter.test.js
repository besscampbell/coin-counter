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
    test('should take user input and store in user object', () => {
      expect(user.age).toBe(30);
      expect(user.planet).toBe('Earth')
  })