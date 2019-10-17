import {sumDigPow} from './sum-dig-pow';

describe(
    'Take a number and sum its digits raised to the consecutive powers and dot dot dot eureka',
    () => {
      it('no equal!!!', () => {
        expect(sumDigPow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
    });
