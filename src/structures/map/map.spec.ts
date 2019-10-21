import {Map} from './map';

describe('Data-structures: Map', () => {
  it('should set, read, delete value', () => {
    const dictionary = new Map();
    const objKey = { a: 'aaa' };
    const summ = (a, b) => a + b;

    dictionary.set(1, 'key-1');
    expect(dictionary.get(1)).toBe('key-1');
    dictionary.set('a', 'key-a');
    expect(dictionary.get('a')).toBe('key-a');
    dictionary.set(objKey, objKey.a);
    expect(dictionary.get(objKey)).toBe(objKey.a);
    dictionary.set(summ, summ);
    expect(dictionary.has(summ)).toBeTruthy();

    expect(dictionary.size).toBe(4);

    expect(dictionary.has(5)).toBeFalsy();
    expect(dictionary.delete(5)).toBeFalsy();

    expect(dictionary.delete(1)).toBeTruthy();
    expect(dictionary.delete('a')).toBeTruthy();

    expect(dictionary.size).toBe(2);
  });
});
