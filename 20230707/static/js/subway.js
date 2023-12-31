let station = new Array(40).fill(0);
//1번차량은 1 , 2번차량은 2 , 3번차량 3, 4번차량은 4로
//station 배열에 표기한다.
const st_name = [
"상수역", "은선역", "예림역", "향숙역", "영주역", "선향역", "상준역", "승겹역", "승겸역", "수호역",
"민지역", "태균역", "길원역", "철환역", "유성온천역", "중앙로역", "서대전역", "대전역", "판암역",
"용문역", "시청역", "정부청사역", "현충원역", "탄방역", "갈마역", "용산역", "오룡역", "부산역",
"대구역", "조치원역", "세종역", "청주역", "신탄진역", "중리동역", "반석역", "월컵역", "지족역",
"계림역", "천안역", "대동역"
];


const train=[0,0,0,0];  //기차 4대 
const train_color = [ " ", "t-gold", "t-tomato", "t-lime", "t-hotpink"];


window.onload = function () {
    map_draw(); // 지하철 지도 그리기
    train_active(); // 지하철 차량 움직이기
}

// function train_active() {
//     station[0] = 1;
//     map_draw();
//     setInterval(
//         function () {
//             station[Math.abs(train[0]++)] = 0;
//             station[Math.abs(train[0])] = 1;
//             map_draw();
//             if (train[0] === 30) {
//                 station[Math.abs(train[0])] = 0;
//                 map_draw();

//                 setTimeout(function () {
//                     train[0] = -40;
//                 }, 100);
//             }
//         }
//     , 100);
// }

function train_active() {
    station[0] = 1;
    station[1] = 2;
    station[2] = 3;
    station[3] = 4;
    map_draw();
    setInterval(function () {
        for (var i = 0; i < 4; i++) {
            station[Math.abs(train[i]++)] = 0;
            station[Math.abs(train[i])] = i + 1;
        }
        map_draw();
        if (train[0] === 30) {
            for (var i = 0; i < 4; i++) {
                station[Math.abs(train[i])] = 0;
            }
            map_draw();
            setTimeout(function () {
                for (var i = 0; i < 4; i++) {
                    train[i] = -(40 + i);
                }
            }, 100);
        }
    }, 100);
}






function map_draw() {
var map = document.querySelector("#map");
var out = "";

for (var line = 0; line < 4; line++) {
    var t = line * 10;
    if (line%2 != 0) {
    t += 9;
    while (t >= line*10 )
        out += make(t--);
    } else {
    while (t <= line*10+9 )
        out += make(t++);
    }
}
map.innerHTML = out;
}

function make(t) {
    var w95="";
    if((t%10==9 || t%10==0) &&t!=0) //줄의 마지막역과 시작역 부분
        w95="w95";
    if(t==9 || t==29 || t==19) //줄의 마지막역
        w95="w95-top";
    if(t==10 ||t==30 || t==20) //줄의 시작역
        w95 += "w95-bottom";
    if(t==19 || t==20) //오른쪽에 있는 연결 되어야하는 역
        w95 += "-right";




    var out = "";
    out += "<div class='station'>";
    out += "<div class='train " + train_color[station[t]] + "'><i class='fa-solid fa-train-subway'></i></div>";
    out += "<div class='mark'><div class='rail "+w95+"'></div>" +
            "<span class='stop'><i class='fa-regular fa-stop'></i></span>";
            
            out+="</div>";
    if(t%10==9 && t!=39)
    out+="<div class='rad " +(t==19? 'right':'left')+"'></div>";
    out += "<div class='name'>" + st_name[t] + "</div></div>";
    return out;
    

    }