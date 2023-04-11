// 최대공약수와 최소공배수

// 잘못 짠 코드
// function solution(n, m) {
//     let a = [0,0]
//     if(n%m === 0 || m%n === 0) {
//        a[0] = Math.min(n,m)
//     } else {
//         a[0] = 1;
//     }
//     if(n%m === 0 || m%n === 0) {
//         a[1] = Math.max(n,m)
//     } else {
//         a[1] += n*m
//     }
//     return a
// }

// 수정한 코드
function solution(n, m) {
    var answer = [];
    let a = Math.min(n, m);
    let b = Math.max(n, m);
    
    for(let i = a; i >= 1; i--) {
        if(a % i == 0 && b % i == 0) {
            return [i, (a * b / i)]
        }
    }
    return answer;
}