function solution(before, after) {
  // Convert strings to arrays to make them mutable
  const beforeArray = before.split('');
  const afterArray = after.split('');
  
  // Sort arrays in alphabetical order
  beforeArray.sort();
  afterArray.sort();
  
  // Check if the two arrays are equal
  if (beforeArray.join('') === afterArray.join('')) {
    return 1;
  } else {
    return 0;
  }
}
