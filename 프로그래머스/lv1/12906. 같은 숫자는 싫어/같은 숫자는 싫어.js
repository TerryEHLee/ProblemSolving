// function solution(arr)
// {
//     var answer = [arr[0]];

//     for (i = 1; i < arr.length; i++) {
//         arr[i] !== arr[i-1] ? answer.push(arr[i]) : answer
//     }
    
//     return answer;
// }

// function solution(arr)
// {
//     let beforeNumber
//     const answer = []
//     arr.forEach(num=>{
//         if(beforeNumber !== num){
//             answer.push(num)
//         }
//         beforeNumber = num
//     })

//     return answer
// }

function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}