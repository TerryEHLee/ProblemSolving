function solution(dots) {
    var answer = 0;
    let x = []
    let y = []
    
    dots.forEach(ele => x.push(ele[0]))
    dots.forEach(a => y.push(a[1]))
    
    answer = (Math.max(...x) - Math.min(...x))*(Math.max(...y) - Math.min(...y))
    return answer;
}