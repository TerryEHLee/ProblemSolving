function solution(a, b, c) {
    var answer = 0;
    
    switch (true) {
        case (a !== b && a !== c && b !== c):
            answer = a + b + c
            break
            case (a !== b && b === c ||
                  a !== b && a === c ||
                  a !== c && a === b):
            answer = (a + b + c) * (a * a + b * b + c * c)
            break
        case (a === b && b === c):
            answer = (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c)
    }
    return answer;
}