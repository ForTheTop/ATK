let lotto =new Array(); // 역대 당첨 번호 저장될 배열





window.onresize = function () {
    var wd = window.innerWidth;
    if (wd > 786) {
    var list = document.getElementsByClassName("menu_list")[0];
    list.style.display = "none";
    list.dataset.show = "1";
    }
};



window.onload = function() {
    var icon = document.getElementsByClassName("strapicon");
    icon[0].addEventListener("click", open_close);

    content = document.getElementById("content");
    var file = document.querySelector("#lotto");
    file.addEventListener("change", function(e) {
    let target = e.target; //선택된 파일 참조
    let files = target.files;  //선택 된 파일은 배열의 형식으로 저장
    let reader = new FileReader(); //첫번째 파일을 참조해야 내가 선택한 파일을 읽을 수 있다.
    reader.addEventListener("load", function(){
        var str = reader.result;
        var temp = str.split("\n");
        // 1073회차니깐 1072에서 배열이 끝난다.


        //  배열에서 사용하는 for문 : var i in 변수
        // i에 들어 가있는건 index이다.
        // 이게 왜 사용 가능하냐면 배열은 몇번에서 몇번까지이다라는게
        // 정해져있기 떄문이다.
        for(var i in temp){
            lotto.push(temp[i].split("\t"));
            // \t가 tab키를 의미하는 명령어이다.
            // lotto 명령어는 이차원 배열이다.
        }
        alert(lotto[0][3]);
        //안내창에 화살표가 뜨는건 tab키가 표시 되는것이다.
        //배열 안에 배열을 만들어 사용해야 숫자랑 탭키가 분리된다.
        // (이것을 이차원 배열이라고 한다.)
    });
      reader.readAsText(files[0]); // 파일을 텍스트 형식으로 읽기
    });
}

        /*

         **아이콘을 클릭해서 목록에 나오게 하는 첫번째 방법
        var list = document.getElementsByClassName("menu_list");
        list[0].style.display="block";
        

        아이콘을 클릭해서 목록에 나오게 하는 두번째 방법
        var list = this.nextSibling;
        list.style.display = "block";

        //class를 이용한 버튼 만들기 방법

        현재 태그의 다음 태그를 가져오는방법
        -nextSibling(형제 태그를 의미한다.)
        태그(엘리먼트) 객체에 클래스를 추가하는 방법
        -element.classList.add("클래스 이름");
        클래스에 여러개 추가
        -element.classList.add("클래스 이름","클래스 이름" , ........);
        클래스 이름 변경
        - element.ClassList.replace("변경전 이름" , "변경 후 이름 ");
        클래스 삭제
        -element.classList.toggle('삭제할 클래스 이름');
        조건에 따라 클래스 삭제
        -element.classList.toggle('삭제할 클래스 이름' ,조건식);
        태그 (element) 객체에 클래스가 있는지 확인 방법
        -element.classList.contains('클래스 이름');
        -해당 클래스 이름이 있다면 true 없다면 false

        elment = 담겨져 있는 변수
        */


    //***이것이 class를 이용한 첫번째 방법
     //var list = this.nextSibling;
        // var isActive = list.classList.contains("list_active");
        // if(isActive)
        //     list.classList.toggle("list_active");
        // else
        //     list.classList.toggle("list_active");


    /* dataset

    - HTML5부터는 태그에 데이터를 담을 수 있는 개념이 있다.
    - 데이터 속성은 태그에 data- 로 시작한다.

    -dataset은 브라우저에 어떠한 행동도 관여 하지 않기 때문에
    자유롭게 데이터를 넣어 사용하면 된다.

    -자바스크립트에서 활용을 할 수 있고 Html에서는 다른 속성처럼
    태그에 영향을 주지않는다.

    -다른 속성이라 하면 width , height , style 등등
    <div width="200"> -> 이거는 width라는 속성에 의해 div 크기에 영향을 준다.
    하지만 dataset은 영향을 주지않는다.

    window.innerWidth; 브라우저의 화면 너비
    window.innerheight; 브라우저의 화면 높이
    window.outerWidth;  브라우저의 전체 너비
    window.outerheight;  브라우저의 전체 높이

    브라우저의 크기가 변경되면 동작하는 함수 =resize()

    */

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
           //******dataset을 이용하는 방법
    //**  껏다켰다 하려면 dataset의 값을 바꿔야 한다.
    
    function open_close() {
        var list = document.getElementsByClassName("strapicon")[0].nextSibling;
        var show = list.dataset.show;
        if (show == 1) {
        list.style.display = "block";
        list.dataset.show = "0";
        } else {
        list.style.display = "none";
        list.dataset.show = "1";
        }
    }
    //***이것이 class를 이용한 첫번째 방법
    // var isActive = list.classList.contains("list_active");
    // if(isActive)
    //     list.classList.toggle("list_active");
    // else
    //     list.classList.toggle("list_active");



let content = null;

function win_confirm() {
    var out = "<div id ='input_box'>";
    var input="";
    for(var i= 1; i<=6; i++)
        input+="<input type='number' class='mynum'>";
    out+=input + "</div>";
    content.innerHTML=out;


}

function make_num() {
    if(lotto.length==0){
        alert("로또 파일을 먼저 열어 주세요.");
        return;
        //오류가 나지 않도록 방지하기 위함이다.
    }

    var out = "<table class='makeTable'>";
    for(var n=1; n<6; n++){
    let lucky_num = new Array();
    lucky_num.push(Math.floor(Math.random() * 45) + 1);
    for (var i = 1; i < 6; i++) {
        var num = Math.floor(Math.random() * 45) + 1;
        if (lucky_num.indexOf(num) == -1) {
            lucky_num.push(num);
        } else {
            i--;
        }
    }
    lucky_num.sort(function(a,b){return a-b;})
    // return에 a-b 면 오름차순 , b-a면 내림차순

    //로또 숫자를 태그에 담아주기

    out += "<tr>";

    out += "<td class ='numTd'>"+n+".</td>";
    for (var i = 0; i < lucky_num.length; i++) {
        out += "<td class ='numTd'>" + lucky_num[i] + "</td>";
    }
    out += "</tr>"; //tr부분이 5번 만들어 져야 하기 떄문에 for 조건문은 여기서 닫는다.

            //짝,홀 갯수 , 총합
            var even=0 , odd=0;
            var total=0;
            for(var i=0; i<lucky_num.length; i++){
                total += lucky_num[i];
                if(lucky_num[i]%2 === 0){
                    even++;
                } else{
                    odd++;
                }
            }
            //산술적 복합성 값 구하기
            var ac = new Array();
            for(var i=lucky_num.length-1; i>=1; i--){
                    for(var k=i-1; k>=0; k--){
                        var tmp = lucky_num[i] -lucky_num[k];
                        if(ac.indexOf(tmp) ==-1)
                            ac.push(tmp);
                    }
            } 
            
            // 역대 당첨 번호와 비교하기.
            // lotto는 2차원 배열 - 1차원 배열이 두개 있기 때문에 인덱스도 두개다
             //i 변수에는 첫번째 인덱스를 k 변수에는 두번째 인덱스를 표현한다.
            for(var i in lotto){ 
                for(var k=2; k<=7; k++){
                    if(ac.indexOf(lotto[i][k] != -1)){
        //역대 당첨번호와 같은 숫자가 ac배열에 있다면 ac배열에서 삭제하기
        //배열에 저장되어있는 데이터를 삭제하는 방법
        //1.배열이름.pop()
        //2.특정인덱스의 데이터를 삭제 - 배열이름.splice(인덱스,갯수)
        // 삭제할 데이터의 인덱스와 해당 인덱스 부터 몇개 삭제할것인지 갯수
            var index=ac.indexOf(lotto[i][k]);
            ac.slice(index,1);
                }
            }
        }
    out += "<td colspan='7'>" + "AC : "+ (ac.length-5) +" "+ "총합:"+total+" " + "홀/짝 :"+ odd +"/"+even+"</td>";
    }      // "AC:"+(ac.length-5)+" 로또 회사에서 계산하는 공식이다.
    out += "</table>";


    //출력
    content.innerHTML = out;
}

function num_count() {
    alert("당첨확인 클릭");
}


//////////** 이건 월요일날 이어서 만듭니다 ~~~ *//////////