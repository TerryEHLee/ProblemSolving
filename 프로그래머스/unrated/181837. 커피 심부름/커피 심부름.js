function solution(order) {
    var answer = 0;
    let ame = 0;
    let latte = 0
    
    order.forEach(coffee => {
        if (coffee.includes('americ')) {
            ame++
        } else if (coffee.includes('latte')) {
            latte++            
        } else {
            ame++
        }
    })
    answer = ame * 4500 + latte * 5000
    return answer;
}