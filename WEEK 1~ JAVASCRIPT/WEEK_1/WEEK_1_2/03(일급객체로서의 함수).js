//일급객체로서의 함수

// 1. 변수에 함수를 할당할 수 있다.
const sayHello = function () {
    console.log('Hello!');
};

// 2. 함수를 인자로 다른 함수에 전달할 수가 있다.
// 2-1 콜백함수 : 매개변수로써 쓰이는 함수
// 2-2 고차함수 : 함수를 인자로 받거나 return 하는 함수
function callFunction (func) {
    // 매개변수로 받은 변수가 사실, 함수다.
    func();
}

callFunction(sayHello);

// 3. 함수를 반환 할 수 있다.
function createAdder(num) {
    return function (x) {
        return x + num;
    };
}

const addFive = createAdder(5);
console.log(addFive(10)); // 15
// return 을 함수로 할수있는이유가 함수가 일급객체이기때문이다.

// 일급 객체로써의 함수 (2)
const person = { // this 는 스코프 안에 서는 항상 자기 자신 (객체) 를 가르킨다
    name : "John",
    age : 30,
    isMarried : true,
    sayHello: () => { // 화살표 함수를 썼을때는 this 를 바인딩 하지 않는다 
        console.log(`Hello , MY name is ${this.name}`); //화살표함수라 this.name 은 undefined 로 출력됨
    },
}

// 배열의 요소로 함수를 할당

const myArr = [
    function (a,b) {
        return a+b
    },
    function (a,b) {
        return a - b;
    },
]

console.log(myArr[0](1,3)) // 4
console.log(myArr[1],(10,7)) // 3

function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}

const multiplyByTwo = multiplyBy(2)
console.log(multiplyByTwo(10)) //20
