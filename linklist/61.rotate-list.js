class ListNode {
    constructor(val, next) {
        this.val = val || 0
        this.next = next || null
    }
}

const rotateRight = (head, k) => {
    if (!head) return head
    let p = head, n = 1
    while (p.next) {
        p = p.next
        n ++
    }
    p.next = head
    k %= n
    k = n - k
    while (k --) {
        p = p.next
        head = head.next
    }
    p.next = null
    return head
}