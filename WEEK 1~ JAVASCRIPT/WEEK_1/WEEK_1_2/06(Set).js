// Set
// 고유한 값을 저장하는 자료구조다.
// 값만 저장한다.
// 키를 저장하지 않는다.
// 값이 중복되지 않는 유일한 요소로만 구성됨
// 값 추가, 검색, 값 삭제 , 모든 값 제거 , 존재여부확인

const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
mySet.add('value5');
mySet.add('value8');
// 중복된값 저장 x

console.log(mySet.size); // 4
console.log(mySet.has('value1')); //true
console.log(mySet.has('value2')); //true
console.log(mySet.has('value3')); //false

// Iterator , 반복자
for (const value of mySet.values()) {
    console.log(value)
}