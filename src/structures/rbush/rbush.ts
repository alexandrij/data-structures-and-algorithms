export interface Node {
  children: Node[],
  height: number,
  leaf: boolean,
  maxX: number,
  maxY: number,
  minX: number,
  minY: number,
}

function createNode(children: Node[]): Node {
  return {
    children,
    height: 1,
    leaf: true,
    maxX: -Infinity,
    maxY: -Infinity,
    minX: Infinity,
    minY: Infinity,
  }
}

export class RBush {
  private maxEntries: number;

  private minEntries: number;

  private data: Node;

  public constuctor(maxEntries = 9) {
    // макс. кол - во узлов 9 по - умолчанию в одном узле
    // мин. заполнение 40% для лучшей производительности
    this.maxEntries = Math.max(4, maxEntries);
    this.minEntries = Math.max(2, Math.ceil(this.maxEntries * 0.4));

    this.clear();
  }

  pubblic all(): Node[] {
    return this._all(this.data, []);
  }

  search(bbox): RBush {
    this.data = createNode([]);
    return this;
  }

  clear(): RBush {
    this.data = createNode([]);
    return this;
  }

  private _all(node, result) {
    const nodesToSearch = [];
    while (node) {
      if (node.leaf) {
        result.push(...node.children);
      } else {
        nodesToSearch.push(...node.children);
      }
      node = nodesToSearch.pop();
    }
    return result;
  }
}
