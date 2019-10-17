export interface MapEntry<K, V> {
  key: K;
  value: V;
  next?: MapEntry<K, V>;
  prev?: MapEntry<K, V>;
}

export class Map<K, V> {
  public readonly data: object = {};

  get length(): number {
    return this._length;
  }
  private _length: number = 0;

  public set(key: K, value: V) {
    // const keyHash = this.hash(key);
  }

}
