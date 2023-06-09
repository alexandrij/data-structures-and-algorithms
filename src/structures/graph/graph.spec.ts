import { Graph, stringComparator } from './graph';

describe('data structure: Graph', () => {
  it('should add element to graph', () => {
    const graph = new Graph<string>(stringComparator);
    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('c');

    expect(graph.toString()).toBe('a -> ; b -> ; c -> ;');
  });

  it('should add element and edge to graph', () => {
    const graph = new Graph<string>(stringComparator);

    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('c');

    graph.addEdge('a', 'b');
    graph.addEdge('a', 'c');

    graph.addEdge('b', 'a');
    graph.addEdge('b', 'c');

    graph.addEdge('c', 'a');
    graph.addEdge('c', 'b');

    expect(graph.toString()).toBe('a -> b c; b -> a c; c -> a b;');
  });

  it('should remove element from graph', () => {
    const graph = new Graph<string>(stringComparator);

    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('c');

    graph.addEdge('a', 'b');
    graph.addEdge('a', 'c');
    graph.addEdge('b', 'c');
    graph.addEdge('c', 'a');

    expect(graph.toString()).toBe('a -> b c; b -> c; c -> a;');

    graph.removeNode('b');
    expect(graph.toString()).toBe('a -> c; c -> a;');

    graph.removeNode('a');
    expect(graph.toString()).toBe('c -> ;');

    graph.removeNode('c');
    expect(graph.toString()).toBe('');
  });

  it('should remove edge from grah', () => {
    const graph = new Graph<string>(stringComparator);

    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('c');
    graph.addNode('d');

    graph.addEdge('a', 'b');
    graph.addEdge('a', 'c');
    graph.addEdge('a', 'd');
    graph.addEdge('b', 'c');
    graph.addEdge('c', 'a');

    graph.removeEdge('a', 'c');
    expect(graph.toString()).toBe('a -> b d; b -> c; c -> a; d -> ;');
  });
});
