function solution(phone_number) {
    if (phone_number.length <= 4) {
        return phone_number;
    }

    var answer = '';

    for (i = 0; i < phone_number.length - 4; i++) {
        answer += '*';
    }

    for (j = phone_number.length - 4; j < phone_number.length; j++) {
        answer += phone_number[j];
    }

    return answer;
}
