class ListNode {
    constructor (val, next) {
        this.val = val || 0
        this.next = next || null
    }
}
const detectCycle = head => {
    if (!head || !head.next) return null
    // 追及相遇问题
    
    // 1 -> 2 -> 3 -> 4 -> 5 ->
    // p
    // q
    let p = head, q = head
    do {
        // p 每次走一步，q 每次走两步
        p = p.next
        q = q.next.next
    } while (p !== q && q && q.next)
    if (p !== q) return null
    // 此时，p q 相遇说明有环
    // p 回到 head 找相遇的节点
    p = head
    while (p !== q) {
        p = p.next
        q = q.next
    }
    return p
}