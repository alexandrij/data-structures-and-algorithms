import {LinkedList} from './linked-list';

describe('Связaнный список', () => {
  const list = new LinkedList();

  it('Добавление значение в список', () => {
    debugger;
    list.add(10);
    expect(list.getRoot()).toEqual({
      next: undefined,
      value: 10,
    });
    expect(list.getSize()).toBe(1);

    list.add(20);
    expect(list.getRoot()).toEqual({
      next: {
        next: undefined,
        value: 20,
      },
      value: 10,
    });
    expect(list.getSize()).toBe(2);
  });

  debugger;

  it('Удаление значения из списка', () => {
    debugger;
    list.remove(20);
    expect(list.getRoot()).toEqual({
      next: undefined,
      value: 10,
    });
    expect(list.getSize()).toBe(1);
  });
});
