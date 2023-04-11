// 두 개 뽑아서 더하기
function solution(numbers) {
    let ans = []
    for(let i =0; i < numbers.length; i++) {
        for(let j =0; j <numbers.length; j++) {
            if(i !== j){
           ans.push(numbers[i]+numbers[j])
            }
        }
    }
    return [...new Set(ans)].sort((a,b) => a-b)
}