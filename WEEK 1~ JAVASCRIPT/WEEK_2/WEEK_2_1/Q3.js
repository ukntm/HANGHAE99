// 같은 숫자는 싫어
function solution(arr) {
    return arr.filter((a,i) => arr[i] !== arr[i+1])
}