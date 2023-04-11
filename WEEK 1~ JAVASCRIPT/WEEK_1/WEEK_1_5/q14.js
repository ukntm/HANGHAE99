// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let arr1 = arr.filter(a => a%divisor === 0)
   return arr1.length === 0 ? [-1] :
    arr1.sort((a,b) => a-b)
}