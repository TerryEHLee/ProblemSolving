function solution(my_string) {
  var answer = 0;
  let nums = [];
  let current = '';

  for (let char of my_string) {
    if (!isNaN(char)) {
      current += char;
    } else {
      if (current) {
        nums.push(Number(current));
        current = '';
      }
    }
  }

  if (current) {
    nums.push(Number(current));
  }

  nums.forEach(num => {
    answer += num;
  });

  return answer;
}
