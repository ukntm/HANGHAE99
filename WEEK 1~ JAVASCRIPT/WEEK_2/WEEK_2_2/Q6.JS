// 예산
function solution(d, budget) {
    let ans = 0;
    d.sort((a,b) => a-b)
    for (let i = 0; i < d.length; i++) {
        if(budget - d[i] >= 0) {
            budget = budget-d[i]
            ans += 1;
        }
    }
    return ans
}