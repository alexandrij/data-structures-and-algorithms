export class Node {
  children: Node[];
  height: number;
  leaf: boolean;
  maxX: number;
  maxY: number;
  minX: number;
  minY: number;

  constructor(children: Node[]) {
    this.children = children;
    this.height = 1;
    this.leaf = true;
    this.maxX = -Infinity;
    this.maxY = -Infinity;
    this.minX = Infinity;
    this.minY = Infinity;
  }
}

// export class RBush {
//   private maxEntries: number;
//
//   private minEntries: number;
//
//   private data: Node;
//
//   public constuctor(maxEntries = 9) {
//     // макс. кол - во узлов 9 по - умолчанию в одном узле
//     // мин. заполнение 40% для лучшей производительности
//     this.maxEntries = Math.max(4, maxEntries);
//     this.minEntries = Math.max(2, Math.ceil(this.maxEntries * 0.4));
//
//     this.clear();
//   }
//
//   public all(): Node[] {
//     return this._all(this.data, []);
//   }
//
//   search(bbox): RBush {
//     this.data = createNode([]);
//     return this;
//   }
//
//   clear(): RBush {
//     this.data = createNode([]);
//     return this;
//   }
//
//   private _all(node, result) {
//     const nodesToSearch = [];
//     while (node) {
//       if (node.leaf) {
//         result.push(...node.children);
//       } else {
//         nodesToSearch.push(...node.children);
//       }
//       node = nodesToSearch.pop();
//     }
//     return result;
//   }
// }
