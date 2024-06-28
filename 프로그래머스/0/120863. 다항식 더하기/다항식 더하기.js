function solution(polynomial) {
    let answer = '';
    
    const splitedPolynomial = polynomial.split(' + ');

    let coefficient = 0;
    let constant = 0;
    
    splitedPolynomial.forEach(item => {
        if (item.includes('x')) {
            item === 'x' ? 
                coefficient++ : 
            coefficient += +item.slice(0,-1);
        } else {
            constant += +item 
        }
    })
    
    if (coefficient === 0 && constant === 0 ) {
        return answer = '0'
        
    }
    answer =
    coefficient === 0 ?
         String(constant)
    :  coefficient === 1 ?
        (constant === 0 ? 'x' : `x + ${constant}`)
        : constant === 0 ?
        `${coefficient}x`
    : `${coefficient}x + ${constant}`
        
    return answer;
}