// 이상한 문자 만들기
function solution(s) {
    return s.split(' ')
        .map(a => a.split('')
        .map((v,j) => j%2 === 0 ? 
       v.toUpperCase() : 
       v.toLowerCase() )
             .join('')
                ).join(' ')
    
    } 
