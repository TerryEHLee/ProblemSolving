function solution(d, budget) {
    var answer = 0;

    // Sort the array in ascending order
    d.sort((a, b) => a - b);

    // Iterate through the sorted array
    for (let i = 0; i < d.length; i++) {
        // Subtract the department's budget request from the total budget
        budget -= d[i];

        // If the remaining budget is less than 0, stop the iteration
        if (budget < 0) {
            break;
        }

        // Increment the answer by 1 for each supported department
        answer++;
    }

    return answer;
}
