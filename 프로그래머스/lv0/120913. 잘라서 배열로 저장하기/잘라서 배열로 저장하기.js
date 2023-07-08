function solution(my_str, n) {
var answer = [];
var length = my_str.length;

for (var i = 0; i < length; i += n) {
var chunk = my_str.slice(i, i + n);
answer.push(chunk);
}

return answer;
}