// 연산자(+,-,*,/,%)

// 1. 더하기 연산자
console.log(1+1); // 2
console.log(1+"1"); // 11

// 2. 빼기 연산자
console.log(1 - "2"); // -1
console.log(1-2); // -1

// 3. 곱하기 연산자(*)
console.log(2*3) // 6
console.log("2" * 3); // 6

// 4. 나누기 연산자(/)
console.log(6 / 3);  // 2
console.log("6" / 3); // 2

// 5. 나머지 연산자 (%) 
console.log(7 % 3); // 1

// 6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
let x = 10;

// 6-2. 더하기 등호 연산자(+=)
x += 5; // 15

// 6-3. 빼기 등호 연산자(-=)
x -= 5; // 5

let a = 10;
a*= 2; // 20 2를 곱하고 재할당

// 비교 연산자
// 1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환
console.log(2===2); // true
console.log(2 === "2"); // false

// 2. 불일치 연산자 (!==)
// 타입까지 일치해야 false 를 반환
console.log(2 !== 2); // false
console.log(2 !== "2") // true

// 3. 작거나 같다 (<=,>=)
console.log(2 > 3);   // false
console.log(2 > "3");   // false
console.log("2" > 3);   // false

// 4. 논리곱 연산자 모두 true 일때 true 반환 (and)
console.log(true && true);   // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);   // false

// 4-1 논리합 연산자 둘중 하나라도 true 인경우 true 반환 (or)
console.log(true || true);   // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);   // false

//4-2 논리 부정 연산자 => !(not)
onsole.log(!true);   // false
console.log(!false);   // true
console.log(!(2 > 1));   // false

// 5. 삼항 연산자
let y = 10;
let result = y > 5 ? "크다" : "작다";
// true 면 : 앞의 값 false면 : 뒤의값을 반환