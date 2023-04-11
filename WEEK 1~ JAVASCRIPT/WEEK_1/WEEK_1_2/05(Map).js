const myMap = new Map();
myMap.set("one",1);
myMap.set("two",2);
myMap.set("three",3);

console.log(myMap.keys());
for (const key of myMap.keys()) {
    console.log(key);
}
//MapIterator {one, two, three} one two three

console.log(myMap.values());
for (const value of myMap.values()) {
    console.log(value);
}
//MapIterator {1,2,3} 1 2 3
console.log(myMap.entries());
for (const entry of myMap.entries ()) {
    console.log(entry);
}
//MapEntries {['one',1],['two',2], ['three',3]}

// 맵의 사이즈 (길이)
console.log(myMap.size); // 3
console.log(myMap.has("two")) // key 기반으로 검색 있으면 true 로 없으면 false 로 나옴
