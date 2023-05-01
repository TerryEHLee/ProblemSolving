function solution(my_string, num1, num2) {
    var answer = '';
    let arr = my_string.split(''); // convert string to an array
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]]; // swap elements
    answer = arr.join(''); // convert array back to a string
    return answer;
}
