function solution(absolutes,signs) {
    for(let i = 0; i < absolutes.length; i++) {
        signs[i] ? a += absolutes[i] : a -= absolutes[i]
        }
        return a
    }