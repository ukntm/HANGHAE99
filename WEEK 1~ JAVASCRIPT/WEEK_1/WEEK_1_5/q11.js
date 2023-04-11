// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i*x)
    }
    return arr
}