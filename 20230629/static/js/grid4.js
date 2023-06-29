window.onload=function(){
    setInterval(function(){
        var dt = document.querySelector("#date_time");
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const date = now.getDate();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const sec = now.getSeconds();
        dt.innerHTML=now;
    },1000);
};
// padStart() - 문자열의 시작을 다른 문자열로 채워준다.