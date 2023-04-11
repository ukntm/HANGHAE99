// 형 변환
// 명시적 형 변환, 암시적 형 변환

// 1. 암시적
// 1-1 문자열
console.log(1 + "2");   // "12"
console.log("1" + null);   // "1null"
console.log("1" + undefined);   // "1undefined"

// {},null,undefined + "1" => 문자열과 만나면 문자열이된다

// 1-2 숫자
console.log(1 - "2");   // -1
console.log("2" * "3");   // 6
console.log(4 + +"5");   // 9

// 더하기 연산자가 아니면 숫자가 우선시됨

// 2. 명시적 형 변환 직접 자료형을  변환
// 2-1. Boolean
console.log(Boolean(0));   // false
console.log(Boolean(""));   // false
console.log(Boolean(null));   // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));   // false
console.log(Boolean("false"));   // true 문자열은 true
console.log(Boolean({}));   // true 객체도 true

//2-2. 문자열
console.log(String(123)); // "123"
console.log(String({}));        // "[object Object]"

//2-3. Number
console.log(Number(""));      // 0
console.log(Number("  "));    // 0
console.log(Number(true));    // 1
console.log(Number(false));   // 0