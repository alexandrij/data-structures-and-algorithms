import {MapEntry} from './map-entry';

interface MapCollection<K, V> {
  objects: Array<MapEntry<K, V>>;
  primitives: object;
}

export class Map<K, V> {
  private data: MapCollection<K, V> = Object.create({
    objects: [],
    primitives: Object.create(null),
  });

  get size(): number {
    return this._size;
  }
  private _size: number = 0;

  private head?: MapEntry<K, V>;

  private tail?: MapEntry<K, V>;

  private objectHash: symbol = Symbol('Hash(map)');

  public set(key: K, value: V): void {
    const keyHash = this.hash(key);
    let entry: MapEntry<K, V>;
    const objectHash = this.objectHash;

    if (keyHash === null) {
      if (typeof key[objectHash] === 'number' &&
          this.data.objects[key[objectHash]] instanceof MapEntry) {
        entry = this.data.objects[key[objectHash]];
        entry.value = value;
        return;
      }

      entry = new MapEntry(key, value);
      this.data.objects.push(entry);
      this._size++;

      Object.defineProperty(key, objectHash, {
        configurable: true,
        value: this.data.objects.length - 1,
      });
    } else {
      if (this.data.primitives[keyHash]) {
        this.data.primitives[keyHash] = value;
        return;
      }

      entry = new MapEntry(key, value);
      this.data.primitives[keyHash] = entry;
      this._size++;
    }

    if (!this.head) {
      this.head = entry;
    }

    if (!this.tail) {
      this.tail = this.head;
    } else {
      this.tail.next = entry;
      entry.prev = this.tail;
      this.tail = entry;
    }
  }

  public get(key: K): V|undefined {
    const keyHash = this.hash(key);
    const objectHash = this.objectHash;

    if (keyHash === null) {
      if (typeof key[objectHash] === 'number' &&
          this.data.objects[key[objectHash]] instanceof MapEntry) {
        return this.data.objects[key[objectHash]].value;
      }
    } else {
      if (this.data.primitives[keyHash] instanceof MapEntry) {
        return this.data.primitives[keyHash].value;
      }
    }
  }

  public has(key: K): boolean {
    const keyHash = this.hash(key);
    const objectHash = this.objectHash;

    if (keyHash === null) {
      return (
          typeof key[objectHash] === 'number' &&
          this.data.objects[key[objectHash]] instanceof MapEntry);
    } else {
      return (this.data.primitives[keyHash] instanceof MapEntry);
    }
  }

  public delete(key: K): boolean {
    const keyHash = this.hash(key);
    const objectHash = this.objectHash;
    let entry: MapEntry<K, V>;

    if (keyHash === null) {
      if (typeof key[objectHash] === 'number' &&
          this.data.objects[key[objectHash]] instanceof MapEntry) {
        entry = this.data.objects[key[objectHash]];
        delete this.data.objects[key[objectHash]];
        delete entry.key[objectHash];
      } else {
        return false;
      }
    } else {
      if (this.data.primitives[keyHash] instanceof MapEntry) {
        entry = this.data.primitives[keyHash];
        delete this.data.primitives[keyHash];
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
      this.head = entry.next;
      this.head.prev = undefined;
      entry.next = undefined;
    } else if (entry.prev && !entry.next) {
      this.tail = entry.prev;
      this.tail.next = undefined;
      entry.prev = undefined;
    } else {
      this.head = undefined;
      this.tail = undefined;
    }
    this._size--;
    return true;
  }

  public forEach(callback: (key: K, value: V) => void): void {
     let entry = this.head;

     while ((entry instanceof MapEntry)) {
       callback(entry.key, entry.value);
       entry = entry.next;
     }
  }

  private hash(key: K): string|null {
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
