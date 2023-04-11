// 런타임
// RUN + TIME
// 코드가 돌아가는 그 환경
// 1. 노드
// 2. 브라우저
// 전역 환경에서 this 는 -> 노드(global 객체) 브라우저(window 객체)

// 함수는 독립적
// 함수에서의  this 는 전역객체를 의미함

// 메서드는 
// 메서드에서의 this 는 메서드의 주체인 객체를 의미함

// 명시적 this binding
// call, apply , bind
// call
var func = function (a,b,c) {
    console.log(this,a,b,c);
};

// no binding
// func(1,2,3); this 는 전역객체 를가르키고 1,2,3 출력

// 명시적 binding
func.call({x: 1}, 4,5,6)
// this 는 {x: 1}

let obj = {
    a: 1,
    method: function (x,y) {
        console.log(this.a,x,y);
    },
}
// method 함수 안에서의 this 는 항상 obj
obj.method(2,3);

obj.method.call({a: 4},5,6)
//call 메서드를 이용해 obj 안의 this 의 binding 을 바꿈

obj.method.apply({a: 4},[5,6])
// apply 도 call 과 같음 뒤의 매개변수를 [] 로 묶어주기만하면됨

// 유사 배열 객체
// 배열과 유사한 객체 반드시 length 가 필요함

//ex

let obj1 = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

// 배열처럼 배열의 메서드를 사용할순없지만 call 과 apply 를 사용해 사용하게 만들수있다
// ES6 에서 Array.from 이라는 기능으로 객체를 배열로 만들수있다

// 객체 -> 배열
let arr = Array.from(obj1);
console.log(arr); // ['a','b','c']
// 배열로 출력됨

//bind method
function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}
function Student(name, gender, school) {
	Person.call(this, name, gender); // 여기서 this는 student 인스턴스
	this.school = school;
}
function Employee(name, gender, company) {
	Person.apply(this, [name, gender]); // 여기서 this는 employee 인스턴스
	this.company = company;
}
let kd = new Student('길동', 'male', '서울대');
let ks = new Employee('길순', 'female', '삼성');

let numbers = [10, 20, 3, 16, 45];
// let max = (min = numbers[0]); //10
// numbers.forEach(function(number) {
//     if(number > max) {
//         max = number;
//     }

//     //
//     if (number < min) {
//         min = number;
//     }
// });
// console.log(min,max)  3,45

let max = Math.max(...numbers); //45
let min = Math.min(...numbers); //3

// bind 메서드
// -> this 를 바인딩 하는 메서드
// call, apply 와는 좀 다름 즉시호출 x
// [목적]
// 1. 함수에 This 를 '미리' 적용
// 2. 부분 적용 함수

let func = function (a,b,c,d) {
    console.log(this,a,b,c,d);
};

func(1,2,3,4);
// 함수의 this 를 미리 적용
let bindFunc1 = func.bind({x: 1});
bindFunc1(5,6,7,8)