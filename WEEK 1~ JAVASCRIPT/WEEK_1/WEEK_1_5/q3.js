// 가운데 글자 가져오기
function solution(s) {
    return s.length%2 === 0 ?
    s.substring((s.length/2)-1,(s.length/2)+1) : 
    s.substring(Math.floor(s.length/2),Math.ceil(s.length/2))
}