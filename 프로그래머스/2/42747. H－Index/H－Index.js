function solution(citations) {
    // citations 배열을 내림차순으로 정렬
    citations.sort((a, b) => b - a);
    
    let hIndex = 0;
    
    // 인용 횟수가 인덱스보다 크거나 같으면 hIndex 증가
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            hIndex = i + 1;
        } else {
            break;
        }
    }
    
    return hIndex;
}
