function solution(clothes) {
    let clothMap = new Map();

    // 의상을 종류별로 분류하여 Map에 저장
    for (let [name, type] of clothes) {
        if (clothMap.has(type)) {
            clothMap.set(type, clothMap.get(type) + 1);
        } else {
            clothMap.set(type, 1);
        }
    }

    // 각 종류별로 경우의 수 계산 (입지 않는 경우 포함)
    let answer = 1;
    for (let count of clothMap.values()) {
        answer *= (count + 1); // 해당 종류에서 입지 않는 경우를 포함
    }

    // 모든 의상을 입지 않는 경우(1)를 제외
    return answer - 1;
}
