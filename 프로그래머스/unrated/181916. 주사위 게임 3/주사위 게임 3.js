function solution(a, b, c, d) {
    var answer = 0;
    
    switch (true) {
        case (a === b && b === c && c === d):
            answer = 1111 * a
            break
        case (a === b && b === c):
            answer = (10 * a + d) ** 2
            break
        case (a === c && c === d):
            answer = (10 * a + b) ** 2
            break
        case (a === b && b === d):
            answer = (10 * a + c) ** 2
            break
        case (b === c && c === d):
            answer = (10 * b + a) ** 2
            break
        case (a === b && c === d):
            answer = (a + c) * Math.abs(a - c)
            break
        case (a === c && b === d):
            answer = (a + b) * Math.abs(a - b)
            break
        case (a === d && b === c):
            answer = (a + b) * Math.abs(a - b)
            break
        case (a === b):
            answer = c * d
            break
        case (a === c):
            answer = b * d
            break
        case (a === d):
            answer = b * c
            break
        case (b === c):
            answer = a * d
            break
        case (b === d):
            answer = a * c
            break
        case (c === d):
            answer = a * b
            break
        default:
            answer = Math.min(a, b, c, d)
    }
    return answer;
}