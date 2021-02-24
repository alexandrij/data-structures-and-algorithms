import 'jasmine';
import { equalArrays } from './equal-arrays';

describe('Algoritms: array equivalence check', () => {
    it('arrays are equivalent', () => {
        expect(equalArrays([0, 1, 2, 3], [0, 1, 2, 3])).toBeTrue();
        expect(equalArrays([0, true, 2, ''], [0, true, 2, ''])).toBeTrue();
        expect(equalArrays([], [])).toBeTrue();
    });
    it('arrays of different lengths', () => {
        expect(equalArrays([0, 1, 2, 3, 4], [0, 1, 2, 3])).toBeFalse();
    });
    it('arrays are not equivalent', () => {
        expect(equalArrays([0, 1, 2, 4], [0, 1, 2, 3])).toBeFalse();
    });
    it('deep arrays are equivalent', () => {
        expect(equalArrays(
            [0, 1, 2, [1, 2]],
            [0, 1, 2, [1, 2]],
            (a, b) => Array.isArray(a) && Array.isArray(b) ? equalArrays(a, b) : a === b
        )).toBeTrue();
    });
});
