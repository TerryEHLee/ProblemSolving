function solution(s) {
    var answer = '';
    let cnt = {}
    for (i = 0; i < s.length; i++) {
        if (cnt.hasOwnProperty(s[i])) {
            cnt[s[i]]++
        } else {
            cnt[s[i]] = 1
        }
    }
    for (j =0; j < Object.keys(cnt).length; j++) {
        if (cnt[Object.keys(cnt)[j]] === 1) {
            answer += Object.keys(cnt)[j]
        }
    }
    return [...answer].sort().join('');
}