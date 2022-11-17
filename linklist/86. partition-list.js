class ListNode {
    constructor (val, next) {
        this.val = val || 0
        this.next = next || null
    }
}

const partition = (head, x) => {
    //  r1: 存储 val < x 的节点
    //  r2: 存储 val >= x 的节点
    //  p1: r1 的指针
    //  p2: r2 的指针
    let r1 = new ListNode,
        r2 = new ListNode,
        p = head,
        p1 = r1,
        p2 = r2
    while (p) {
        if (p.val < x) p1.next = p, p1 = p1.next
        else p2.next = p, p2 = p2.next
        p = p.next 
    }
    // 此时将 r2 从 p2 处断开，否则会形成环
    p2.next = null
    p1.next = r2.next
    return r1.next
}