import 'jasmine';
import { equalsArray } from './equals-array';

describe('Algoritms: array equivalence check', () => {
    it('arrays are equivalent', () => {
        expect(equalsArray([0, 1, 2, 3], [0, 1, 2, 3])).toBeTrue();
        expect(equalsArray([0, true, 2, ''], [0, true, 2, ''])).toBeTrue();
        expect(equalsArray([], [])).toBeTrue();
    });
    it('arrays of different lengths', () => {
        expect(equalsArray([0, 1, 2, 3, 4], [0, 1, 2, 3])).toBeFalse();
    });
    it('arrays are not equivalent', () => {
        expect(equalsArray([0, 1, 2, 4], [0, 1, 2, 3])).toBeFalse();
    });
    it('deep arrays are equivalent', () => {
        expect(equalsArray(
            [0, 1, 2, [1, 2]],
            [0, 1, 2, [1, 2]],
            (a, b) => Array.isArray(a) && Array.isArray(b) ? equalsArray(a, b) : a === b
        )).toBeTrue();
    });
});
