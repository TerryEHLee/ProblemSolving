function solution(arr, queries) {
    var answer = [];

    for (var i = 0; i < queries.length; i++) {
        var array = [];
        for (var j = queries[i][0]; j <= queries[i][1]; j++) {
            if (arr[j] > queries[i][2]) {
                array.push(arr[j]);
            }
        }

        var minNum = array.length > 0 ? Math.min(...array) : -1;
        answer.push(minNum);
    }

    return answer;
}
