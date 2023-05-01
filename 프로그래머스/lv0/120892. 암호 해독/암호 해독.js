function solution(cipher, code) {
    var answer = '';
    let result = []
    for (i = code - 1; i < cipher.length; i += code) {
        result.push(cipher[i])
    }
    answer = result.join('')   
    return answer;
}