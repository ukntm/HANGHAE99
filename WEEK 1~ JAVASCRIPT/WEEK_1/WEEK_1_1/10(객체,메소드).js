// 객체
// 하나의 변수에 여러개의 값을 넣을 수 있다.
let person = { 
    name : "홍길동",
    age : 30,
    gender: "남자"
}

// 생성자 함수
function Person(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동",30,"남자");

// 접근 방법
console.log(person1.name); // "홍길동"

// 객체 메소드 
// 1. Object.key() : key 를 가져오는 메소드
 let keys = Object.keys(person) // ['name', 'age' , 'gender']
 let values = Object.values(person) // ['홍길동' , '30', '남자']

// 2. entries
// key 와 value 를 묶어서 배열로 만든 배열
let entries = Object.entries(person);
// { name: "홍길동", age: 30, gender: "남자" }

// 3. .assign(복사할곳,복사할것,바꿀 곳)
let newPerson = {};
 Object.assign(newPerson, person, { age: 35 });
// { name: "홍길동", age: 35, gender: "남자" }

// 4. 객체 비교
console.log(JSON.stringify(person1) === JSON.stringify(person)); // true
// JSON.stringify() 문자열화 시킨다

// 5. 객체 병합
// ... : spread operator 펼쳐서 전개
let perfectMan = {...person,...person1};
console.log(perfectMan); // {'홍길동' , '30', '남자','홍길동' , '30', '남자'}