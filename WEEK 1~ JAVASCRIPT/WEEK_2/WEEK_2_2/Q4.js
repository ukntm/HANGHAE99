// 약수의 개수와 덧셈
// 약수 = left 를 나눴을때 나머지 =0인 수들 > 약수의 갯수
// 중에서 짝수인 수를 더하고 홀수인수를 빼면됨
// for 문 2중중첩해서 나오는거 더하거나 뺌
function solution(left, right) {
    let ans = 0;
    for(let i = left; i <=right; i++) {
        let factorCount = 0;
        for(let j=1; j <= i; j++) {
            // 약수 의 갯수 구하는식
            if(i%j === 0) {
                factorCount += 1;
                }
            }
        //약수의 개수가 짝수인 수들의 합
    if(factorCount %2 ===0){
        ans += i;
    } else {
        ans -= i;
    }
}
    return ans;
}

// gpt
function solution(left, right) {
    let ans = 0;
    for(let i = left; i <= right; i++) {
        let factorCount = 0;
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                factorCount += 1;
                if(j !== i/j) { // 제곱근일 때 중복 제거
                    factorCount += 1;
                }
            }
        }
        if(factorCount % 2 === 0) {
            ans += i;
        } else {
            ans -= i;
        }
    }
    return ans;
}