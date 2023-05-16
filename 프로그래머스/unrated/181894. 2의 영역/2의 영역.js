function solution(arr) {
  let indices = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      indices.push(i);
    }
  }
  
  if (indices.length === 0) {
    return [-1];
  }
  
  if (indices.length === 1) {
    return [2];
  }
  
  const start = indices[0];
  const end = indices[indices.length - 1];
  
  return arr.slice(start, end + 1);
}
