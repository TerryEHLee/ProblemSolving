function solution(s) {
    var answer = '';
    const table = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    };
    let word = '';

    [...s].forEach((str) => {
        if (isNaN(str)) { // 숫자가 아닌 경우
            word += str;
            if (table[word] !== undefined) {
                answer += table[word];
                word = '';
            }
        } else { // 숫자인 경우
            answer += str;
        }
    });
    return parseInt(answer);
}