function solution(s) {
    var answer = '';
    var upp = [];
    var low = [];
    
    for (str in s) {
        str.toUpperCase() === str ?
            upp.push(s[str]) : low.push(s[str])
    }
    
    low.sort();
    upp.sort();
    
    answer = low.join('') + upp.join('')
        
    return [...answer].reverse().join('');
}