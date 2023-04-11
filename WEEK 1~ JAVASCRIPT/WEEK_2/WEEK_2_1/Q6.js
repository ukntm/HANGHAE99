// 모의고사
function solution(answers) {
    let score = [0,0,0]
    let p = {
        p1: [1,2,3,4,5],
        p2: [2, 1, 2, 3, 2, 4, 2, 5],
        p3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }
    for(let i=0; i < answers.length; i++) {
        if(p.p1[i%p.p1.length] === answers[i]) {
            score[0]++;
        }
        if(p.p2[i%p.p2.length] === answers[i]) {
            score[1]++;
        }
        if(p.p3[i%p.p3.length] === answers[i]) {
            score[2]++;
        }
    }
    let ans = []
        for (let i =0; i < 3; i++) {
            if (score[i] === Math.max(...score))
                ans.push(i+1)
        }
    return ans;
}
