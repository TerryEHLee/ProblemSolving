function solution(rank, attendance) {
    var answer = 0;
    let arr = [];
    
    attendance.filter((v,i) => v&&arr.push(rank[i]))
    arr.sort((a,b) => a-b)
    
    answer = rank.indexOf(arr[0])*10000 + rank.indexOf(arr[1])*100 + rank.indexOf(arr[2])
    
    return answer;
}