class ListNode {
    constructor (val, next) {
        this.val = val || 0
        this.next = next || null
    }
}
const hasCycle = head => {
    if (!head) return false
    // 追及相遇问题
    // p 每次走一步，q 每次走两步
    // p q 相遇说明有环

    // 1 -> 2 -> 3 -> 4 -> 5 ->
    // p    q
    let p = head, q = head.next
    while (p !== q && q && q.next) {
        p = p.next
        q = q.next.next
    }
    return p === q
}