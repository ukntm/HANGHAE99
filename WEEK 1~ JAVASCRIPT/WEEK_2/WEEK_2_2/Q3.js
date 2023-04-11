// 신규 아이디 추천
function solution(new_id) {
    let ans = '' 
    // 1단계
    ans = new_id.toLowerCase();
    // 2단계
    ans = ans.replace(/[^\w\-\.]/g,'');
    // 3단계
    ans = ans.replace(/\.{2,}/g,'.');
    // 4단계
    ans = ans.replace(/^\.|\.$/g,'')
    // 5단계
    if (ans.length === 0) {
        ans = "a"
    }
    // 6단계
    if (ans.length > 15) {
        ans = ans.substr(0,15)
        ans = ans.replace(/\.$/,'')
    }
    // 7단계
        // if(ans.length < 3) 
        //     ans += ans[ans.length-1].repeat(3-ans.length);
    
    return ans.padEnd(3, ans[ans.length-1])
}