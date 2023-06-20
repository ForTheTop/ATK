// script_fun4.js
let com = 0; // setInterval의 id 저장
let com_img = ""; // 컴퓨터 이미지 img 태그
let path = "./static/image/"; // 이미지 기본 경로 값
let res = ""; // 결과 출력 태그 (b 태그)
let seq = 0; // seq값이 0이면 가위, 1이면 바위, 2라면 보

function select(user) {
    clearInterval(com); // 컴퓨터 이미지 변경되는 거 멈추기, setInterval 중지
    const ctemp = Math.floor(Math.random() * 3);
    // 이미지에 상관없이 별도의 컴퓨터 가위바위보 값을 구한다.
    // setInterval에 의해 타이밍이 맞지 않는 현
