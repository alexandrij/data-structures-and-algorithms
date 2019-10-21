export class MapEntry<K, V> {
  public next?: MapEntry<K, V>;
  public prev?: MapEntry<K, V>;

  constructor(public key: K, public value: V) {}
}
