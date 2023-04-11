// 두 정수 사이의 합
function solution(a, b) {
    const num = [];
    let max = Math.max(a,b)
    let min = Math.min(a,b)
     for (let i = min; i <= max ; i++) {
         num.push(i)
     }
    return num.reduce((a,b) => a+b ,0)
}