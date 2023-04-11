// 구조분해 할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나, 객체의 속성

// (1) 배열의 경우
let [val1, val2] = [1, "new"];
let arr = ["value1","value2","value3","value4"];
let [a,b,c,d = 4] = arr; // a = value1 b= value2 c=value3 d=value4

// (2) 객체인 경우
let user = { name , age } = {
    name: "nbc",
    age: 30
}

// 새로운 이름으로 할당
let user1 = {
    name: "nbc",
    age: 30
}

let {name:newname , age: newAge} = user1
// newname = nbc newAge = 30