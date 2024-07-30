function solution(elements) {
    const set = new Set();
    const n = elements.length;
    
    // 원형 수열을 만들기 위해 배열을 두 번 반복
    const doubledElements = [...elements, ...elements];
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += doubledElements[i + j];
            set.add(sum);
        }
    }
    
    return set.size;
}

console.log(solution([7,9,1,1,4])); // 출력: 18