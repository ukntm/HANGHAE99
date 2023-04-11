// 배열
// 1. 기본 생성
let fruit = ["사과","바나나","오렌지"];

// 2. 크기 지정
let number = new Array(5);

// 3. 요소 접근
fruit[0];

// 4. 배열 메서드
// 4-1 push
let fruits = ["사과","바나나"];
fruits.push("오렌지")
// fruits = ["사과","바나나","오렌지"]
// 4-2 pop
fruits.pop();
// fruits = ["사과","바나나"]
// 배열의 마지막 요소 삭제
// 4-3 shift
fruits.shift();
// fruits = ["바나나"]
// 배열의 맨앞 요소 삭제
// 4-4 unshift
fruits.unshift("포도");
// fruits = ["포도","바나나"]
// 배열 맨앞에 요소 추가

// 4-5 splice(start,deleteCount,number)
fruits.splice(1,1,"키위") // 1번에서부터 1개의 요소를 지우고 "키위"로교체
// fruits = ["포도","키위"]

// 4-6 slice(start,end)
//start 부터 end 전까지로 새로운 배열로 만듦

// 4-7 forEach 배열을 한바퀴 순회
let numbers = [4,1,5,4,5];

// 매개변수 자리에 함수를 넣는 것 : 콜백함수
numbers.forEach(function(item){
    console.log("item입니다=> " + item)
});

// 4-8 map 새로운 배열을 만듬 반드시 return 문을 가져야함 return 을 안하면 undefined 로 출력됨
let newnumbers = numbers.map(function(item){
    return item * 2;
});

// 4-9 filter 배열에서 조건에 맞는거만 반환
let filteredNumbers = numbers.filter(function(item){
    return item > 3; // [4,5,4,5]
});

// 4-9 find 리턴으로 조건에 맞는 첫번째 값만 반환
let findNumbers = numbers.find(function(item) {
    return item > 3; // 4
})