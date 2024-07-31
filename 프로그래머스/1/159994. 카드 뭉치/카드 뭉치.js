function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    for (let goalString of goal) {
                console.log(goalString, cards1, cards2)

        if (goalString === cards1[0]) {
            cards1.shift();
        }
        else if (goalString === cards2[0]) {
            cards2.shift();
        } else {
            answer = 'No';
            return answer
        }
    }
    return answer;
}