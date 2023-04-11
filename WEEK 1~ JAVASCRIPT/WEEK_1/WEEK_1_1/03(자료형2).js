// 2. 문자 : String(문자열 = 문자의 나열)
// '' = ""
let str = "Hello Wordl";
// console.log(typeof str);

// 2-1 문자열 길이 확인하기
console.log(str.length); // 12

// 2-2 문자열 결합하기.
let str1 = "Hello, ";
let str2 = "world!";
let result = str.concat(str2) // 2개의 변수 문자열합침
// console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello. World!"
console.log(str3.substr(7,5)) // 시작위치부터 몇개까지 자를지
console.log(str3.slice(7,12)) // 시작위치부터 몇번째까지 자를지

// 2-4 문자열 검색
let str4 = "Hello World1"
console.log(str4.search("World")); //문자열의 시작지점을 찾는 메서드

// 2-5 문자열 대체
let str5 = "Hello world";
let result01 = str5.replace("world", "Javascript")  // 앞의 문자를 뒤에문자로 교체 하는 메서드

// 2-6 문자열 분할
let str6 = "apple, banana, kiwi"
let result02 = str6.split(",") // 자르는 기준이되는 문자로 배열안에 집어넣음
console.log(result02);
