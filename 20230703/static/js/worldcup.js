    const image=["골든리트리버.jpg","길냥이.jpg", "동경개.jpg","랙돌.jpeg",
"말티즈.jpg","메인쿤.jpg","바센지.jpg","발발이.jpeg","보더콜리.jpg",
"보르조이.jpg","봄베이.jpg","불테리어.jpg","브리아드.jpg","삽살개.jpg",
"샴.jpg","셰퍼드.jpg","소말리.png","슈나우저.jpg","스핑크스.jpg",
"시바견.jpg","시추.jpg","오리엔탈.jpg","이그제틱.jpg","진돗개.jpg",
"치와와.jpg","코니시렉스.jpg","페르시안 고양이.jpg","푸들.jpeg","풍산개.jpg",
"핀셔.jpg","허스키.jpg","웰시코기.jpg"];

const kind = ["골든리트리버", "길냥이", "동경개","랙돌","말티즈","메인쿤",
"바센지","발발이","보더콜리","보르조이","봄베이","불테리어","브리아드",
"삽살개","샴","셰퍼드","소말리","슈나우저","스핑크스","시바견","시추",
"오리엔탈","이그제틱","진돗개","치와와","코니시렉스","페르시안 고양이",
"푸들","풍산개","핀셔","허스키","웰시코기"];

    let Tournament1 = new Array();    // 현재 토너먼트
    let Tournament2 = new Array();    // 다음 토너먼트 (현재 토너먼트에서 선택한 것)
    let turn = new Array();
    let round = 16; // 현재 몇강? (처음은 16강)
    let count = 1; // 현재 순서 (처음은 1번)

        function Turnmix() {
        for (var i = 1; i <= round; i++) {
            var tmp = Math.floor(Math.random() * round);
            if (turn.indexOf(tmp) == -1) {
            turn.push(tmp);
            } else {
            --i;
            }
        }
    }

    function Tagselect(id) {
    return document.getElementById(id);
    }

    window.onload = function() {
        var title = Tagselect("title");
        title.innerHTML = round + "강 " + count + "/" + (round / 2);

        //Tournamet1=image; 창조 복사
        Tournament1=Array(round).fill().map((arr,i)=>i);
        //0부터 31까지 숫자 Tournament1 Array에 저장



        Turnmix();
        show();

        var left = Tagselect("left");
        var right = Tagselect("right");
        left.addEventListener("click", select);
        right.addEventListener("click", select);
    
    
    };


        function select() {
            if (this === Tagselect("left")) {
            Tournament2.push(turn[count * 2 - 2]);
            } else {
            Tournament2.push(turn[count * 2 - 1]);
            }
            if (count === round / 2) {
            round=round/2;
            count = 0;
            turn = new Array();
            Turnmix();
            Tournament1 = Tournament2.map((i) => i);
            Tournament2 = new Array();
            }
            count++;
            var title = Tagselect("title");
            title.innerHTML = round + "강 " + count + "/" + (round / 2);
            show();
        }


                function show() {
                    var left = Tagselect("leftimg");
                    var right = Tagselect("rightimg");
                    var leftText = Tagselect("leftText");
                    var rightText = Tagselect("rightText");
                
                    left.src = "./static/image/" + image[Tournament1[turn[count * 2 - 2]]];
                    right.src = "./static/image/" + image[Tournament1[turn[count * 2 - 1]]];
                    leftText.innerHTML = kind[Tournament1[turn[count * 2 - 2]]];
                    rightText.innerHTML = kind[Tournament1[turn[count * 2 - 1]]];
                }