function solution(wallpaper) {
    var answer = [0, 0, 0, 0];
    let row = [];
    let col = [];
    
    wallpaper.forEach((file, id) => {
        [...file].forEach((a,idx) => {
            if(a === '#') { 
                row.push(id); 
                col.push(idx)
            }})
    })
    
    answer[0] = Math.min(...row)
    answer[1] = Math.min(...col)
    answer[2] = Math.max(...row)+1
    answer[3] = Math.max(...col)+1
   
    return answer;
}