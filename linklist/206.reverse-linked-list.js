class ListNode {
    constructor (val, next) {
        this.val = val || 0
        this.next = next || null
    }
}
// 1.
const reverseList = head => {
    if (!head) return head
    // pre: 反转链表的头节点
    // cur: 未反转链表的头节点
    // p  : 未反转链表的下一位
    // pre  cur   p
    //       1 -> 2 -> 3 -> 4 -> 5 ->
    // null
    let pre = null, cur = head, p = head.next
    while (cur) {
        cur.next = pre
        pre = cur
        ;(cur = p) && (p = p.next)
    }
    return pre
}
// 2.
const _reverseList = head => {
    if (!head || !head.next) return head
    // 1 -> 2 -> 3 -> 4 ->
    //     head tail  p
    // p   : 反转以后链表的头节点
    // tail: 反转以后链表的尾节点
    let tail = head.next, p = _reverseList(head.next)
    head.next = tail.next
    tail.next = head
    return p
}