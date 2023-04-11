// K번째수
function solution(array, commands) {
    let ans = [];
    for(let i = 0; i < commands.length; i++){
        ans.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)[commands[i][2]-1])
        }
    return ans
    }
