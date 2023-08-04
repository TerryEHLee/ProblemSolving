function solution(dot) {
    var answer = 0;
    let x = dot[0]
    let y = dot[1]
    
    switch (true) {
        case (x > 0 && y > 0): return 1;
            case (x > 0 && y < 0): return 4;
            case (x < 0 && y > 0): return 2;
            case (x < 0 && y < 0): return 3;
        default: return 0
    }
    return answer;
}