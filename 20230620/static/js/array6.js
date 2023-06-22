let show = false; // 시작 버튼 클릭 여부
let cmp_num = []; // 두 개의 숫자를 비교하기 위한 배열
let choice = [];
let end = 0; // 4가 되면 게임 종료
let step = 0; // 클릭 횟수 제한 변수

let num = [];
let board = [];

window.onload = function () {
    init();
    let pic = document.getElementsByClassName("picture");
    for (var i = 0; i < pic.length; i++) {
        pic[i].addEventListener("click", same_search);
    }
}

function init() {
    num = [1, 2, 3, 4, 5, 6]; // 주사위 숫자 배열 초기화
    board = []; // 주사위 위치 배열 초기화

    // 주사위 위치 랜덤 지정
    var availablePositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    availablePositions = shuffleDiceArray(availablePositions);
  
    board = availablePositions;
  
    var count = document.getElementById("count");
    count.innerText = 0;
}

function start() {
    init();
    let pic = document.getElementsByClassName("picture");
    for (var i = 0; i < pic.length; i++) {
        var img = pic[i].getElementsByTagName("img")[0];
        img.style.display = "none"; // 이미지 숨김
    }

    setTimeout(function () {
        show = true; // 시작 버튼 클릭 여부 플래그
    }, 2000);
}

function same_search() {
    if (!show) {
        alert("시작 버튼을 클릭하세요.");
        return;
    }

    var child = this.children[0];
    child.style.display = "inline";

    let span = document.getElementsByClassName("picture");
    for (var i = 0; i < span.length; i++) {
        if (span[i].children[0] === child)
            choice.push(i); // 클릭한 td 태그의 인덱스를 배열에 저장
    }

    cmp_num.push(parseInt(child.getAttribute("src").match(/\d+/)[0]));

    if (cmp_num.length === 2) { // 배열에 숫자 2개가 저장되어 있다면 비교
        if (cmp_num[0] === cmp_num[1]) {
            cmp_num = [];
            choice = [];
            end++; // 2개를 비교해서 같으면 end 변수를 1씩 증가
        } else {
            setTimeout(function () {
                cmp_num = [];
                let pic = document.getElementsByClassName("picture");
                for (var i = 0; i < choice.length; i++) {
                    var img = pic[choice[i]].getElementsByTagName("img")[0];
                    img.style.display = "none"; // 이미지 숨김
                }
                choice = [];
            }, 500);
        }
    }

    var count = document.getElementById("count");
    count.innerText = ++step;

    if (end === 6) {
        alert("게임 끝");
        show = false;
    }

    if (step >= 20 || (step === 20 && end < 6)) { // step이 20 이상이거나 20번 만에도 맞춘 그림 쌍이 6개 미만인 경우
        setTimeout(function () {
            alert("다음 기회에 도전하세요.\n게임 끝");
            show = false;
        }, 500);
    }
}

function shuffleDiceArray(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // 현재 요소와 임의의 요소를 교환하면서 배열을 섞습니다.
    while (0 !== currentIndex) {
        // 남은 요소 중에서 무작위 요소를 선택합니다.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        // 현재 요소와 무작위 요소를 교환합니다.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
}
