function solution(array, n) {
    let closest = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (Math.abs(array[i] - n) < Math.abs(closest - n)) {
            closest = array[i];
        } else if (Math.abs(array[i] - n) === Math.abs(closest - n)) {
            closest = Math.min(closest, array[i]);
        }
    }
    
    return closest;
}
