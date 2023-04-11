// 3진법 뒤집기
function solution(n) {
  const ans = [];
  while (n !== 0) {
    ans.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return ans.reduce((a,b,i) => a+b*(Math.pow(3,i)),0)
}