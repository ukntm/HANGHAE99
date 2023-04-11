// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
    let ans = 0;
    let zeroCount =0;
    for (let i =0; i < 6; i++) {
        if(lottos[i] !== 0) {
            if(win_nums.includes(lottos[i])) {
                ans ++;
            } 
        } else {
            zeroCount += 1;
        }
    }
    if(zeroCount === 6) {
        return [1,6]
    }
    if(zeroCount === 0 && ans === 0){
        return[6,6]
    }
    return [7-ans-zeroCount,7-ans]
}