function solution(age) {
    var answer = '';
    let alp = 'abcdefghij'
    age.toString().split('').map(num => answer += alp[num])
    return answer;
}