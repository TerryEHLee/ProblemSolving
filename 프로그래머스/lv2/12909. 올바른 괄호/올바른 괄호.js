// function solution(s){
//     var answer = true;
//     let left = 0;
    
//    // s[0] === ')' || s[s.length-1] === '(' ? answer = false : answer
       
//     for (i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             left++
//         } else {
//             left--
//         }
//         if (left < 0) {
//             answer = false
//             break
//         }
//     }
 
//     left !== 0 ? answer = false: answer

//     return answer;
// }

// // ())( : false

function solution(s){
    const stack = []

    // 없어도 문제는 X
    // if(s[0] === ')')
    //   return false

    s.split('').map(string=>{
        if(string === ')' && stack[stack.length-1] === '('){
            stack.pop()
        }
        else{
            stack.push(string)
        }
    })

    return stack.length === 0
}