function solution(my_string, queries) {
    for (var i = 0; i < queries.length; i++) {
        var start = queries[i][0];
        var end = queries[i][1];
        my_string = reverseSubstring(my_string, start, end);
    }
    return my_string;
}

function reverseSubstring(str, start, end) {
    var left = str.substring(0, start);
    var middle = str.substring(start, end + 1).split('').reverse().join('');
    var right = str.substring(end + 1);
    return left + middle + right;
}
