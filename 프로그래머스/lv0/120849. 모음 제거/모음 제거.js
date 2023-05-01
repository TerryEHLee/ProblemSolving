function solution(my_string) {
    var answer = '';
    my_string = my_string.split('')
    for (i = 0; i < my_string.length; i++) {
        if (my_string[i] === 'a' || 
            my_string[i] === 'e' || 
            my_string[i] === 'i' || 
            my_string[i] === 'o' || 
            my_string[i] === 'u' ) {
            my_string.splice(i, 1)
            i--
        }
    }
    return my_string.join('');
}