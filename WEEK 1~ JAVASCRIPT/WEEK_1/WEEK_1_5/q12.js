//부족한 금액 계산하기
function solution(price, money, count) {
    let ans = 0;
    for (let i=1; i <= count; i++) {
        ans += i;
    }
    return money - (price*ans) > 0 ? 0 
    : (price*ans)-money;
}