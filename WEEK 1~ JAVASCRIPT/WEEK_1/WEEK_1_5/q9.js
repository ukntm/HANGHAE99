// 핸드폰 번호 가리기
function solution(phone_number) {
    let pl = phone_number.length
    return phone_number
    .substr(0,pl-4)
    .replace(/\d/g,'*')
    + phone_number.substr(pl-4,pl)
}
