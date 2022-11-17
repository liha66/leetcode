class Node {
    constructor (val, next, random) {
        this.val = val || 0
        this.next = next || null
        this.random = random || null
    }
}

const copyRandomList = head => {
    if (!head) return head
    let p = head, q, rst
    // 1 -> 1' -> 2 -> 2' -> 3 -> 3' ->
    while (p) {
        // 每个节点都原样复制一份
        q = new Node(p.val, p.next, p.random)
        q.next = p.next
        p.next = q
        // 跳过复制节点循环 p
        p = q.next
    }
    p = head.next
    while (p) {
        // 改变复制出来的节点的 random
        p.random && (p.random = p.random.next);
        // 循环复制出来的节点 1' 2' ...
        (p = p.next) && (p = p.next)  // <=> p = p.next.next
    }
    // 拆分链表
    p = head
    rst = head.next
    // 1 -> 1' -> 2 -> 2' -> 3 -> 3' ->
    // p    q
    while (p) {
        q = p.next
        p.next = q.next
        p.next && (q.next = p.next.next);
        p = p.next
    }
    return rst
}