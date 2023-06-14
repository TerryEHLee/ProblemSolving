function solution(arr, delete_list) {
    var answer = [];
    
    arr.forEach(ele => {
        if (!delete_list.includes(ele)) {
            answer.push(ele);
        }
    });
    
    return answer;
}
