// Map
// Map,Set 자료구조

// 1. Map
// -key / Value
// -key 에 어떤 데이터 타입도 다 들어올 수 있다/
// -Map 은 키가 정렬된 순서로 저장됨
// -기능
// > 검색 ,삭제 , 제거 ,여부 확인

const myMap = new Map();
myMap.set('key','value'); // 로 자료추가

myMap.get('key') // 로 검색
// 반복 메서드 -> keys,values,entries