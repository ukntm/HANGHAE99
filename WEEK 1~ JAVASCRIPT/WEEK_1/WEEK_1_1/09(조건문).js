// 문 (if,else if ,switch ~~ 조건문,반복문)

// 1. 조건문 - if , else if ,else , switch
let x = 10;

if(조건) {
    // 조건이 true인경우 이 부분 실행
} else if(조건) { 
    // false 인경우 조건을 하나더
} else {
   // 둘다 아닌경우
}

// switch 문
// 변수의 값에 따라 ,여러개의 경우 (case) 중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log("사과입니다");
        break;
    case "바나나":
        console.log("바나나입니다.");
        break;
}

// 조건문의 중첩
let age = 20;
let gender = "여성";

if (age >= 18) {
  if (gender === "남성") {
    console.log("성인 남성입니다.");
  } else {
    console.log("성인 여성입니다.");
  }
} else {
  console.log("미성년자입니다.");
}


//조건부 실행
let c = 10;

(c > 0) && console.log("x는 양수입니다."); //  && 앞의 조건을 만족하면 && 뒤를 실행

// or조건 (||)
// 삼항 연산자와 단축평가
let y;
let z = y|| 20; // y 가 undefined 이면 y 에 20 할당
