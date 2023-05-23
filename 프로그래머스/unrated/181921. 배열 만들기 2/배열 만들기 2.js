function solution(l, r) {
    var answer = [];

    for (let i = l; i <= r; i++) {
        let str = String(i).split('');
        let hasOnly05 = true;

        for (let j = 0; j < str.length; j++) {
            if (str[j] !== '0' && str[j] !== '5') {
                hasOnly05 = false;
                break;
            }
        }

        if (hasOnly05) {
            answer.push(i);
        }
    }

    return answer.length > 0 ? answer : [-1];
}