function solution(strings,n) {
    return strings.map((a) => a.substring(n,n+1)).sort((a,b) => a-b)
}