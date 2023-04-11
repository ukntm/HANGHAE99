// 내적
function solution(a, b) {
    return a.map((e,i) => e * b[i]).reduce((c,d) => c+d,0)
}
