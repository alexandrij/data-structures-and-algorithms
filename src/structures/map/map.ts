import {MapEntry} from './map-entry';

interface MapCollection<K, V> {
  objects: Array<MapEntry<K, V>>;
  primitives: object;
}

export class Map<K, V> {
  private _data: MapCollection<K, V> = Object.create({
    objects: [],
    primitives: Object.create(null),
  });

  get size(): number {
    return this._size;
  }
  private _size: number = 0;

  private _head?: MapEntry<K, V>;

  private _tail?: MapEntry<K, V>;

  private _objectHash: symbol = Symbol('Hash(map)');

  public set(key: K, value: V): void {
    const keyHash = this._hash(key);
    let entry: MapEntry<K, V>;
    const objectHash = this._objectHash;

    if (keyHash === null) {
      if (typeof key[objectHash] === 'number' &&
          this._data.objects[key[objectHash]] instanceof MapEntry) {
        entry = this._data.objects[key[objectHash]];
        entry.value = value;
        return;
      }

      entry = new MapEntry(key, value);
      this._data.objects.push(entry);
      this._size++;

      Object.defineProperty(key, objectHash, {
        configurable: true,
        value: this._data.objects.length - 1,
      });
    } else {
      if (this._data.primitives[keyHash]) {
        this._data.primitives[keyHash] = value;
        return;
      }

      entry = new MapEntry(key, value);
      this._data.primitives[keyHash] = entry;
      this._size++;
    }

    if (!this._head) {
      this._head = entry;
    }

    if (!this._tail) {
      this._tail = this._head;
    } else {
      this._tail.next = entry;
      entry.prev = this._tail;
      this._tail = entry;
    }
  }

  public get(key: K): V|undefined {
    const keyHash = this._hash(key);
    const objectHash = this._objectHash;

    if (keyHash === null) {
      if (typeof key[objectHash] === 'number' &&
          this._data.objects[key[objectHash]] instanceof MapEntry) {
        return this._data.objects[key[objectHash]].value;
      }
    } else {
      if (this._data.primitives[keyHash] instanceof MapEntry) {
        return this._data.primitives[keyHash].value;
      }
    }
  }

  public has(key: K): boolean {
    const keyHash = this._hash(key);
    const objectHash = this._objectHash;

    if (keyHash === null) {
      return (
          typeof key[objectHash] === 'number' &&
          this._data.objects[key[objectHash]] instanceof MapEntry);
    } else {
      return (this._data.primitives[keyHash] instanceof MapEntry);
    }
  }

  public delete(key: K): boolean {
    const keyHash = this._hash(key);
    const objectHash = this._objectHash;
    let entry: MapEntry<K, V>;

    if (keyHash === null) {
      if (typeof key[objectHash] === 'number' &&
          this._data.objects[key[objectHash]] instanceof MapEntry) {
        entry = this._data.objects[key[objectHash]];
        delete this._data.objects[key[objectHash]];
        delete entry.key[objectHash];
      } else {
        return false;
      }
    } else {
      if (this._data.primitives[keyHash] instanceof MapEntry) {
        entry = this._data.primitives[keyHash];
        delete this._data.primitives[keyHash];
      } else {
        return false;
      }
    }

    if (entry.prev && entry.next) {
      entry.prev.next = entry.next;
      entry.next.prev = entry.prev;
      entry.prev = undefined;
      entry.next = undefined;
    } else if (!entry.prev && entry.next) {
      this._head = entry.next;
      this._head.prev = undefined;
      entry.next = undefined;
    } else if (entry.prev && !entry.next) {
      this._tail = entry.prev;
      this._tail.next = undefined;
      entry.prev = undefined;
    } else {
      this._head = undefined;
      this._tail = undefined;
    }
    this._size--;
    return true;
  }

  public forEach(callback: (key: K, value: V) => void): void {
     let entry = this._head;

     while ((entry instanceof MapEntry)) {
       callback(entry.key, entry.value);
       entry = entry.next;
     }
  }

  private _hash(key: K): string|null {
    const strKey = String(key);
    if (key === undefined || key === null) {
      return `I___${strKey}`;
    } else if (typeof key === 'number') {
      return `N___${strKey}`;
    } else if (typeof key === 'string') {
      return `S___${strKey}`;
    } else if (typeof key === 'boolean') {
      return `B___${strKey}`;
    } else {
      return null;
    }
  }
}
