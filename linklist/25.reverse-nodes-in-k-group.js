class ListNode {
    constructor (val, next) {
        this.val = val || 0
        this.next = next || null
    }
}

const __reverseN = (head, n) => {
    if (n === 1) return head
    let tail = head.next, p = __reverseN(head.next, n - 1)
    head.next = tail.next
    tail.next = head
    return p
}

const reverseN = (head, n) => {
    let p = head, cnt = n
    while (p && -- n) p = p.next
    if (!p) return head
    return __reverseN(head, cnt)
}

const reverseKGroup = (head, k) => {
    let ret = new ListNode(0, head), p = ret, q = ret.next
    while ((p.next = reverseN(q, k)) !== q) {
        p = q
        q = p.next
    }
    return ret.next
}