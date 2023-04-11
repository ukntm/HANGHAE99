// 문자열 다루기 기본
function solution(s) {
    if (4 === s.length || s.length === 6) {
    return s.split('').filter((a) => 
           a.search(/\d/) !== 0).length === 0 ? true : false
    } else {
        return false
    }
}