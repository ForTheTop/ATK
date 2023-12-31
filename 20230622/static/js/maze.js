var map=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1],
    [1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1],
    [1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1],
    [1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
    [1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1],
    [1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1],
    [1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1],
    [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function Board(){
    for(var i=0; i<15; i++){
        document.write("<table bgcolor='white' border='1'><tr>");
            for(var j=0; j<15; j++){
                +document.write("<td id=x"+i+"y"+j+" width='15' height='15'></td>");
            }    
            document.write("</tr></table>");
    }
}

Board();

function ChangeColor(x,y,color){
    document.getElementById("x"+x+"y"+y+"").bgColor=color;
}

function drawmaze(){
    for(var i=0; i<15; i++){
        for(var j=0; j<15; j++){
            if(map[i][j]==1){
                ChangeColor(i,j,"#980000"); //벽돌
            }
            else if(map[i][j]==2){
                ChangeColor(i,j,"#FFFF48"); //출구
            }
            else if(map[i][j]==3){                    
                ChangeColor(i,j,"#90E4FF");
                document.getElementById("x"+i+"y"+j).innerHTML="<img src='Kkobuk.jpg' width='30' height='25'>"
            }
            else if(map[i][j]==0){
                ChangeColor(i,j,"white");
                document.getElementById("x"+i+"y"+j).innerHTML="<img src=''>"
            }
        }
    }
}
function erase(){
    for(var i=0; i<15; i++){
        for(var j=0; j<15; j++){
            ChangeColor(i,j,"white");
        }
    }
}

drawmaze();    

var nowX=13;
var nowY=1;

function inputFunction(input){        
    switch(input){
        case 56://up
            map[nowX][nowY]=0;
            nowX--;            
            if(map[nowX][nowY]==1){
                nowX++;
            }
            map[nowX][nowY]=3;
            break;
        case 54://right
            map[nowX][nowY]=0
            nowY++;
            if(map[nowX][nowY]==1){
                nowY--;
            }
            else if(map[nowX][nowY]==2){
                alert("축하합니다! 클리어하셨습니다.")
            }
            map[nowX][nowY]=3;
        break;
        case 52://left
            map[nowX][nowY]=0;
            nowY--;
            if(map[nowX][nowY]==1){
                nowY++;
            }
            map[nowX][nowY]=3;
        break;
        case 50://down
            map[nowX][nowY]=0;
            nowX++;
            if(map[nowX][nowY]==1){
                nowX--;
            }
            map[nowX][nowY]=3;
        break;
    }
    erase();
    drawmaze();
    
};