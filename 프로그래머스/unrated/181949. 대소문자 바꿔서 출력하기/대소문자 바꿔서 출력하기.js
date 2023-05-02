const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = ''

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    arr = str.split('')
    for (i = 0; i < str.length; i++) {
        if (arr[i].toUpperCase() === arr[i]) {
            answer += arr[i].toLowerCase()
        } else {
            answer += arr[i].toUpperCase()
        }
    }
    console.log(answer)
});