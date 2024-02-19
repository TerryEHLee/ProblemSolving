function solution(n) {
    let answer = 0;
    let init_n_num = 0;
    let next_n_num = 0;


    // 1)
    let init_n = n.toString(2);

    for(let i=0; i<init_n.length; i++) {
        if(init_n[i] == '1') {
            init_n_num += 1;
        }
    }


    // 2)
    while(true) {
        n += 1;
        next_n_num = 0;

        let convert_n = n.toString(2);

        for(let i=0; i<convert_n.length; i++) {
            if(convert_n[i] == '1') {
                next_n_num += 1;
            }
        }


        if(init_n_num == next_n_num) {
            answer = n;
            break;
        }
    }

    return answer;
}