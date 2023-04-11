// 음양 더하기
function solution(absolutes, signs) {
    let ans = 0;
    for (let i =0; i < absolutes.length; i++) {
        if (signs[i] === false) {
            ans -= absolutes[i];
        } else {
            ans += absolutes[i];
        }
    }
    return ans;
}