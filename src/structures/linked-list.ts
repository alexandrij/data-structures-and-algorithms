export interface LinkedNode {
    next?: LinkedNode;
    value: any;
}

export class LinkedList {

    private root?: LinkedNode;

    private length: number = 0;

    public add(value: any): void {
        const node: LinkedNode = {
            next: undefined,
            value,
        };
        let parent: LinkedNode | undefined = this.root;

        if (!parent) {
            this.root = node;
        } else {
            while (parent.next) {
                parent = parent.next;
            }
            parent.next = node;
        }
        this.length++;
    }

    public remove(value: any): void {
        let previuosNode: LinkedNode;
        let currentNode: LinkedNode | undefined = this.root;

        if (!currentNode) {
            return;
        }

        if (currentNode.value === value) {
            this.root = currentNode.next;
        } else {
            while (currentNode.next) {
                previuosNode = currentNode;
                currentNode = currentNode.next;

                if (currentNode.value === value) {
                    previuosNode.next = currentNode.next;
                }
            }
        }
        this.length--;
    }

    public getSize(): number {
        return this.length;
    }

    public getRoot(): LinkedNode | undefined {
        return this.root;
    }

}
