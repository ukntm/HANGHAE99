// 시저 암호
function solution(s, n) {
    let ans = ''
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            ans += ' ';
        } else if(s[i] === upper[upper.search(s[i])]) {
            ans += upper[(upper.search(s[i])+n)%26];
        } else if(s[i] === lower[lower.search(s[i])]) {
            ans += lower[(lower.search(s[i])+n)%26];
        }
    }
    return ans
}
