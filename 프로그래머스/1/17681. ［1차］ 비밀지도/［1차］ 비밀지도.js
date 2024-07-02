function solution(n, arr1, arr2) {
    var answer = [];
    
    // arr1과 arr2의 각 요소를 2진수로 변환하고, n 길이에 맞게 앞을 '0'으로 채웁니다.
    const binaryNum1 = arr1.map(arr => arr.toString(2).padStart(n, '0'));
    const binaryNum2 = arr2.map(arr => arr.toString(2).padStart(n, '0'));
    
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            // 두 배열의 2진수를 OR 연산하여 지도 해독
            row += (binaryNum1[i][j] === '1' || binaryNum2[i][j] === '1') ? '#' : ' ';
        }
        answer.push(row);
    }
    
    return answer;
}