function solution(arr, queries) {
    var answer = [];
    
    for (i = 0; i < queries.length; i++) {
        for (j = queries[i][0]; j <= queries[i][1]; j++) {
            arr[j] += 1
        }
    }
    return arr;
}