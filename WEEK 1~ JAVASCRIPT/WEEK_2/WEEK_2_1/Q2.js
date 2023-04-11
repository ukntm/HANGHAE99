//최소 직사각형
function solution(sizes) {
    let a = sizes.map((e,i) => sizes[i].sort((a,b)=> b-a))
    let b = a.map((b,j) => sizes[j][0])
    let c = a.map((b,j) => sizes[j][1])
    return Math.max(...b)*Math.max(...c)
}