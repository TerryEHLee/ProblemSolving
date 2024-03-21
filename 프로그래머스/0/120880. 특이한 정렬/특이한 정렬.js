function solution(numlist, n) {
    // 정렬에 사용할 dictionary를 생성합니다.
    let dict = {};
    
    // numlist의 각 원소와 n의 차이를 계산하여 dictionary에 저장합니다.
    for (let num of numlist) {
        dict[num] = Math.abs(num - n);
    }
    
    console.log(dict)
    // dictionary를 거리를 기준으로 오름차순으로 정렬합니다.
    let sortedKeys = Object.keys(dict).sort((a, b) => {
        if (dict[a] === dict[b]) {
            return b - a; // 거리가 같을 경우 더 큰 수가 앞에 오도록 정렬
        } else {
            return dict[a] - dict[b]; // 거리가 다를 경우 거리가 작은 수가 앞에 오도록 정렬
        }
    });
    
    // 정렬된 키 값을 기반으로 정렬된 배열을 만듭니다.
    let sortedArray = sortedKeys.map(key => parseInt(key));
    
    return sortedArray;
}