function solution(numbers) {
var answer = 0;
var maxVal = -Infinity;

for(let i=0; i<numbers.length; i++){
    for(let j=0; j<numbers.length; j++){

        if( maxVal < (numbers[i]*numbers[j]) 
           && numbers.indexOf(numbers[i]) != numbers.lastIndexOf(numbers[j])){

            maxVal = (numbers[i]*numbers[j]);

        }
    }
}

answer = maxVal;

return answer;
}