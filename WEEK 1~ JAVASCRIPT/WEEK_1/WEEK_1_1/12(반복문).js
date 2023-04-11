// for , while ~동안 : 반복문
// for (초기값; 조건식; 증감식) {
// }
// i 는 0부터시작
// i 가 10이 되기전까지 계속
// i 라는 변수는 한사이클 돌고나면 1을 더함
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 배열과 for 문은 짝궁이다.
const arr = ["one","two","three","four","five"];
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
}

// ex : 0 부터 10까지의 수 중에서 2의 배수만 console.log 로 출력하는 예시
for(let i = 0; i < 11; i++) {
        if (i >=2) {
    if (i%2 === 0) {
        console.log(i)
        }
    }
}

//for ~ in 문
// 객체의 속성을 출력하는 문법
let person = {
    name : "John",
    age : 30,
    gender : "male"
};

for(let key in person) {
    console.log(key + ":" + person[key]);
}

// while 3보다크고 100미만인 수중에 5의 배수를 출력
let i = 0;
while (i < 100) {
    if (3 < i) {
        if (i%5 === 0) {
            console.log(i)
        }
    }
    i++;
}

// do ~ while do 와 while 사이에 있는 로직을 한번 실행하고 반복

let l = 0;

do {
    console.log(l);
    l++;
} while (l > 10);

for (let p = 0; p < 11; p++) {
    if (p === 5) {
        break; // break 가걸리는순간 for 문을 깨버리고 for 문 밖으로나감 
        // continue; // continue 는 그 다음으로 넘어감 5가 값이 출력안됨
    }
    console.log(p);
}
