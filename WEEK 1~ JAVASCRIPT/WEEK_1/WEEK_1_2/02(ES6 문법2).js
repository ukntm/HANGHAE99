// 단축 속성명 : property shorthand
const name = "nbc"
const age = 30;

const obj = {
    name, // key 와 value pair 의 변수 값이 같은경우 생략도 가능 
    age: newAge
}
// const obj { name , age }; 는 const obj {name:name , age:age } 와 동일

// 전개 구문 spread operator
// destrucuring과 함께 가장 많이 사용되는 es6 문법중하나
// ... 은 배열을 풀어서 전개
let arr = [1,2,3];
console.log(arr); // [1,2,3]
console.log(...arr); // 1,2,3

// let newArr = [...arr,4];  = [1,2,3,4]

// 객체
let user = {
    name:"nbc",
    age:30
}

let user2 = {...user};
//user2 와 user 동일

// 나머지 매개변수(rest parameter)
function exampleFunc(a,b,c,...args) {
    console.log(a,b,c);
    console.log(args); // 4 5 6 7
} 
exampleFunc(1,2,3,4,5,6,7)

// Template Literal ` ${} `
const testValue = "안녕하세요!"
console.log(`Hello World ${testValue}`) // 템플릿 리터럴을 통해 변수를 문자열에 포함가능
console.log(` 
    Hello
        My Nme is Javascript!!!

        Nice to meet you!!
`) // 멀티라인도 사용가능