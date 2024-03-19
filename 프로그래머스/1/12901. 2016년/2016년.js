function solution(a, b) {
    var answer = '';
    let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    let calculatedDate = 0;
    let calculatedDay = 0;
    
    // 1월이 아닌 경우 해당 월 이전까지의 일 수를 계산
    for (let i = 1; i < a; i++) {
        calculatedDate += month[i];
    }
    
    // 입력된 일자 더하기
    calculatedDate += b;
    
    // 요일 계산
    calculatedDay = (calculatedDate + 4) % 7;
    
    // 요일 반환
    answer = day[calculatedDay];
        
    return answer;
}

console.log(solution(5, 24)); // "TUE"


// [예시로 이해해보기]

// 0: 금
// 1: 토
// 2: 일
// 3: 월
// 4: 화
// 5: 수
// 6: 목

// 01: 31
// 02: 28 
// 03: 31
// 04: 30
// 05: 31
// 06: 30
// 07: 31
// 08: 31
// 09: 30
// 10: 31
// 11: 30
// 12: 31

// * 1월5일: 화
// 1/1과1/5는 4일 차이

// 1월 이내의 날짜는 해당 날짜-1 을 7로나눈 나머지에 해당하는 요일

// * 2월3일: 목
// 3+31-1)%7 = 5
// 1/31: 일
// 2/01: 월
// 2/02: 화
