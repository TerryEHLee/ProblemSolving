function solution(myString, pat) {
    let maxSubstring = '';
    let currentSubstring = '';

    for (let i = 0; i < myString.length; i++) {
        currentSubstring += myString[i];
        if (currentSubstring.endsWith(pat) && currentSubstring.length > maxSubstring.length) {
            maxSubstring = currentSubstring;
        }
    }

    return maxSubstring;
}
