function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let divisorCount = countDivisors(i);
        answer += (divisorCount > limit) ? power : divisorCount;
    }
    
    return answer;
}

function countDivisors(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += (i * i === n) ? 1 : 2;
        }
    }
    return count;
}


// function solution(number, limit, power) {
//     var answer = 0;
//         let arrNumber = 0;    

//     const findNum = (i) => {
//         for (let j = 1; j <= i; j++) {
//             i % j === 0 ? arrNumber++ : arrNumber
//         }
//         return arrNumber
//     }
    
// for (let i = 1; i <= number; i++) {
//     let arrNumber = 0;    
//     findNum(i)
//         arrNumber > limit ?
//             answer += power
//     : answer += arrNumber
// }
//         return arrNumber;
// }

// function solution(number, limit, power) {
//     var answer = 0;
    
// for (let i = 1; i <= number; i++) {
//     let arrNumber = 0;    
    
//     for (let j = 1; j <= i; j++) {
//         i % j === 0 ? arrNumber++ : arrNumber
//     }
//         arrNumber > limit ?
//             answer += power
//     : answer += arrNumber
// }
//         return answer;
// }

// function solution(number, limit, power) {
//     var answer = 0;
//     let arr = [];
    
// for (let i = 1; i <= number; i++) {
//     let arrNumber = 0;    
    
//     for (let j = 1; j <= i; j++) {
//         i % j === 0 ? arrNumber++ : arrNumber
//     }
//         arr.push(arrNumber)
// }
    
//     arr.forEach(ele => {
//         ele > limit ?
//             answer += power
//         : answer += ele
//     })
//     return answer;
// }

// arr에 1~number까지 각각의 약수개수를 저장;
// // limit이 넘을 경우에만 power로 바꾸어 answer에 더해줌
// 시간초과로 arr 생략
// for 문 2개를 사용하여 약수의 개수를 구하고 있는데, 
//     for문 1개로 약수 구해야함.