let y = 15; //전역변수

// 스코프, 전역변수, 지역변수, 화살표함수
function printX() {
    let x = 10;     // 지역변수
    console.log(x);

}

// console.log(x); // error

// 화살표 함수
// ES6 신 문법 함수 선언문을 좀더 간단하게 사용
let arrowFunc01 = (x,y) => x + y;

let arrowFunc02 = z => z