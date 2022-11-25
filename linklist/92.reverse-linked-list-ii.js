class ListNode {
    constructor (val, next) {
        this.val = val || 0
        this.next = next || null
    }
}

const reverseN = (head, n) => {
    if (n === 1) return head
    // tail: 反转后链表的尾节点
    // p   : 反转后链表的头节点
    let tail = head.next, p = reverseN(head.next, n - 1)
    head.next = tail.next
    tail.next = head
    return p
}
// p   left     right
// 1 -> 2 -> 3 -> 4 -> 5 -> 
const reverseBetween = (head, left, right) => {
    if (!head || !head.next) return head
    let ret = new ListNode(0, head),
        p = ret,
        cnt = right - left + 1
    // 找到待反转链表的前一个节点
    while (-- left) p = p.next
    p.next = reverseN(p.next, cnt)
    return ret.next
}