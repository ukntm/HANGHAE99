// 숫자 문자열과 영단어
function solution(s) {
    const nums = [/zero/gi,/one/gi,/two/gi,/three/gi,/four/gi,/five/gi,/six/gi,/seven/gi,/eight/gi,/nine/gi]
        for(let i =0; i < nums.length; i++) {
            s = s.replace(nums[i],i)
        }
        return Number(s)
    }