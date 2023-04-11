// 데이터 타입
// runtime : run 하는 time
// 코드를 작성할 때가 아니라, 실제 코드가 실행될 때
// -> 옆에 터미널 코드가 실행될 때
// 그 때, 데이터 타입이 결정됨

// 1. 숫자
// 1-1 정수
let num1 = 10;
console.log(typeof num1); //typeof 변수명 하면 변수의 타입을 출력

// 1-2 실수(float)
let num2 = 3.14;
console.log(typeof num2);

// 1-3 지수(Exp)
let num3 = 2.5e5; // 2.5 X 10^5
console.log(typeof num3);

// 1-4. NaN = not a number 숫자가 아닌값을 변형하려고할때 나옴
let num4 = "Hello" / 2; // = NaN

//1-5. Infinity(무한대)
let num5 = 1 / 0;
console.log(num5) // infinity

// 1-6 -infinity
let num6 = -1 / 0 ;
console.log(num6); // -infinity