function start() {
    let num = []; // num 배열 초기화
    let ran = []; // ran 배열 초기화

    // num 배열에 중복 없는 무작위 숫자 생성
    num.push(Math.floor(Math.random() * 10) + 1);
    for (var i = 1; i <= 7; i++) {
        var temp = Math.floor(Math.random() * 10) + 1;
        if (num.indexOf(temp) === -1) {
            num.push(temp);
        } else {
            i--;
        }
    }

    // ran 배열에 중복 없는 무작위 인덱스 생성
    ran.push(Math.floor(Math.random() * 8));
    for (var i = 1; i <= 7; i++) {
        var temp = Math.floor(Math.random() * 8);
        if (ran.indexOf(temp) === -1) {
            ran.push(temp);
        } else {
            i--;
        }
    }

    let pic = document.getElementsByClassName("picture");
    for (var i = 0; i < pic.length; i++) {
        pic[ran[i]].addEventListener("click", same_search);
        pic[ran[i]].innerHTML = num[i % 4];
    }
}

function same_search() {
    // 클릭 이벤트 처리를 위한 코드를 여기에 작성합니다.
}