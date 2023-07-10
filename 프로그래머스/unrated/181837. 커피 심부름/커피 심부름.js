function solution(order) {
    var answer = 0;
    let ame = 0;
    let latte = 0;
    
    order.forEach(coffee => {
        coffee.includes('americano') ? ame++ :
        coffee.includes('latte') ? latte++ : ame++
    })
    answer = ame*4500 + latte*5000
    return answer;
}