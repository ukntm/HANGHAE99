function solution(s) { 
    return s.split(/P|p/).length === s.split(/y|Y/).length ? true : false
}