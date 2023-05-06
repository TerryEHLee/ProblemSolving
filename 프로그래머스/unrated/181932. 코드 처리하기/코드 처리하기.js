function solution(code) {
    var answer = '';
    let mode = 0;
    
    for (i = 0; i < code.length; i++) {
        switch (true) {
            case (mode === 0):
                if (code[i] !== "1" && i % 2 === 0) {
                    answer += code[i];
                } else if (code[i] === "1") {
                    mode = 1;
                }
                break;
            case (mode === 1):
                if (code[i] !== "1" && i % 2 === 1) {
                    answer += code[i];
                } else if (code[i] === "1") {
                    mode = 0;
                }
                break;
        }
    }
    return answer === '' ? 'EMPTY' : answer;
}
