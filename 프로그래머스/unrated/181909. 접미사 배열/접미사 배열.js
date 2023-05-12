function solution(my_string) {
    var answer = [];
    let arr = []
    
    for (i = 0; i < my_string.length; i++) {
        arr.push(my_string.slice(i))
    }
    return arr.sort();
}