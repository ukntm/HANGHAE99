// 없는 숫자 더하기
function solution(numbers) {
    let ans = 0;
    for (let i = 0; i < 10; i++) {
        if(numbers.indexOf(i,0) === -1) {
            ans += i;
        }
    }
    return ans
}