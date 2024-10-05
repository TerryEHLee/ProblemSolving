function solution(cacheSize, cities) {
    var answer = 0;
    const city = cities.map(x => x.toLowerCase());  // 모든 도시명을 소문자로 변환
    let cache = [];

    // 캐시 크기가 0이면 모든 조회가 cache miss임
    if (cacheSize === 0) return cities.length * 5;

    for (let i = 0; i < city.length; i++) {
        const currentCity = city[i];

        if (cache.includes(currentCity)) {
            // Cache hit: 실행 시간 1 추가
            answer += 1;

            // LRU 정책에 따라 해당 도시를 맨 앞으로 이동
            cache = cache.filter(c => c !== currentCity); // 기존 위치에서 삭제
            cache.push(currentCity);  // 다시 맨 뒤에 추가 (가장 최근에 사용됨)
        } else {
            // Cache miss: 실행 시간 5 추가
            answer += 5;

            if (cache.length === cacheSize) {
                // 캐시가 꽉 찼다면, 가장 오래된 항목(첫 번째 항목)을 제거
                cache.shift();
            }

            // 새로운 도시를 캐시에 추가
            cache.push(currentCity);
        }
    }

    return answer;
}
