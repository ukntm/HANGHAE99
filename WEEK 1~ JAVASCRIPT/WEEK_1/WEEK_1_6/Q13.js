// 하샤드 수
function solution(x) {
    return x%String(x).split('').reduce((a,b) => a+Number(b),0) === 0 ? true : false
 }