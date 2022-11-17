const getNext = x => {
    let z = 0
    while (x) {
        const m = x % 10
        z += m ** 2
        x = (x - m) / 10
    }
    return z
}
// 证明快乐数的过程可以看作是一个链表，将 1 看作链表的 null
// 19 -> 82 -> 68 -> 100 -> 1
// 则此题可以按链表是否有环去解
const isHappy = n => {
    let p = n, q = n
    do {
        p = getNext(p)
        q = getNext(getNext(q))
    } while (p !== q && q !== 1)
    return q === 1
}