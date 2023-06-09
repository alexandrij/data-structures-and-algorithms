import { Queue } from '../queue';

export class Node<T> {
  data: T;
  adjacent: Node<T>[];
  comparator: (a: T, b: T) => number;

  constructor(data: T, comparator: (a: T, b: T) => number) {
    this.data = data;
    this.adjacent = [];
    this.comparator = comparator;
  }

  addAdjacent(node: Node<T>): void {
    this.adjacent.push(node);
  }

  removeAdjacent(data: T): Node<T> | null {
    const index = this.adjacent.findIndex((node) => this.comparator(node.data, data) === 0);

    if (index > -1) {
      return this.adjacent.splice(index, 1)[0];
    }

    return null;
  }
}

export class Graph<T> {
  nodes: Map<T, Node<T>> = new Map<T, Node<T>>();
  comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  addNode(data: T): Node<T> {
    let node = this.nodes.get(data);

    if (node) return node;

    node = new Node(data, this.comparator);
    this.nodes.set(data, node);

    return node;
  }

  removeNode(data: T): Node<T> | null {
    const nodeToRemove = this.nodes.get(data);

    if (!nodeToRemove) {
      return null;
    }

    this.nodes.forEach((node) => {
      node.removeAdjacent(nodeToRemove.data);
    });

    this.nodes.delete(data);

    return nodeToRemove;
  }

  addEdge(source: T, destination: T): void {
    const sourceNode = this.addNode(source);
    const destinationNode = this.addNode(destination);

    sourceNode.addAdjacent(destinationNode);
  }

  removeEdge(source: T, destination: T): void {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destination);
    }
  }

  private depthFirstSearchAux(node: Node<T>, visited: Map<T, boolean>): void {
    if (!node) return;

    visited.set(node.data, true);

    node.adjacent.forEach((item) => {
      if (!visited.has(item.data)) {
        this.depthFirstSearchAux(item, visited);
      }
    });
  }

  depthFirstSearch() {
    const visited: Map<T, boolean> = new Map();
    this.nodes.forEach((node) => {
      if (!visited.has(node.data)) {
        this.depthFirstSearchAux(node, visited);
      }
    });
  }

  private breadthFirstSearchAux(node: Node<T>, visited: Map<T, boolean>): void {
    if (!node) return;

    const queue: Queue<Node<T>> = new Queue();
    queue.enqueue(node);
    visited.set(node.data, true);

    let curNode: Node<T> | undefined;
    while ((curNode = queue.dequeue())) {
      curNode.adjacent.forEach((item) => {
        if (!visited.has(item.data)) {
          visited.set(item.data, true);
          queue.enqueue(item);
        }
      });
    }
  }

  breadthFirstSearch() {
    const visited: Map<T, boolean> = new Map();
    this.nodes.forEach((node) => {
      if (!visited.has(node.data)) {
        this.breadthFirstSearchAux(node, visited);
      }
    });
  }

  toString() {
    let i = 0;
    let str = '';

    this.nodes.forEach((node) => {
      const sAdjacents = node.adjacent.reduce((str, node, i) => {
        return str + (i > 0 ? ' ' : '') + node.data;
      }, '');
      str += `${i > 0 ? ' ' : ''}${node.data} -> ${sAdjacents};`;
      i++;
    });

    return str;
  }
}

export function numberComparator(a: number, b: number) {
  if (a < b) return -1;

  if (a > b) return 1;

  return 0;
}

export function stringComparator(a: string, b: string) {
  return a.localeCompare(b);
}
