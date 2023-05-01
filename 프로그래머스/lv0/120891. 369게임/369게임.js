function solution(order) {
    var answer = 0;
    order = String(order)
    let clap = ['3', '6', '9']
    for (i = 0; i < order.length; i++) {
        if (clap.includes(order[i])) {
            answer += 1
        }
    }
    return answer;
}