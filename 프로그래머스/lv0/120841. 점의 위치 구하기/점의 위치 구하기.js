function solution(dot) {
    var answer = 0;
    let x = dot[0]
    let y = dot[1]
    switch (true) {
        case (x > 0 && y > 0):
            answer = 1
            break
        case (x < 0 && y > 0):
            answer = 2
            break
        case (x < 0 && y < 0):
            answer = 3
            break
        case (x > 0 && y < 0):
            answer = 4
            break
    }
    return answer;
}