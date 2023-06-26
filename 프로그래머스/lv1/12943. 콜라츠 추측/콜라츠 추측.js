function solution(num) {
    var answer = 0;
    var i = 0;

    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
        i++;

        if (i > 500) {
            return -1;
        }
    }

    return i;
}
