function solution(hp) {
    var answer = 0;
    let sol = ~~(hp/5)
    let bj = ~~((hp-sol*5)/3)
    let work = hp-(sol*5+bj*3)
    
    answer = sol + bj + work
    return answer;
}