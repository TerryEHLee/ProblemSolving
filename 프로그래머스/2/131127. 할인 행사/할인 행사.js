function solution(want, number, discount) {
    var answer = 0;
    let product = {};
    
    for (let i = 0; i < want.length; i++) {
        product[want[i]] = number[i]
    };
    
    
    let i = 0;
     while( discount.length - i >= 10) {
        const disArr = discount.slice(i, i + 10)
                i++;
         
         let disObj = {}
         for (let str of disArr) {
            disObj[str] = (disObj[str] || 0) + 1;
         }
         
             let state = true;
         
         for (let productKey in product) {
                 // console.log(i, productKey, product[productKey], disObj[productKey], 'answer==>', answer)
             if (product[productKey] > disObj[productKey] || disObj[productKey] === undefined) {
                 state = false;
                 break;
             }
         }
             state ? answer++ : answer
         
    }
    
    return answer;
}