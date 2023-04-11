// 완주하지 못한 선수
// function solution(participant, completion) {
//     return participant.filter((a) => !completion.includes(a)).join()
// }

function solution(participant, completion) {
    for(let i = 0; i < completion.length; i++) {
        let a = participant.indexOf(completion[i])
     if(a !== -1) {
         participant.splice(a,1)
        }   
    }
    return participant.join()
}

// 위의 코드에서 효율성 테스트에 떨어져서 
// 배열을 정렬한후 요소 위치를 맞춰서 처리해서 배열을 순회하지 않고 비교해서 수행속도가 훨씬 빨라짐
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < completion.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    return participant[participant.length-1];
}
