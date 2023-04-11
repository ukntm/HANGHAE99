// 제일 작은 수 제거하기

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    if (arr.length === 0) {
        arr = [-1]
    }
    return arr
}

// 처음엔 Math.min 을 사용하지않고 sort 로 내림차순을이용해 
// arr 배열의 0 번째 인덱스값을 제거하고 출력하려고 했으나
// 배열을 정렬하지않고 원래 배열대로 출력해야되서 위의 식으로 바꿈