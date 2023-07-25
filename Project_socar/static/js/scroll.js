const saTitle = document.getElementsByClassName('sa-title')[0];
const saIntro = document.getElementsByClassName('sa-intro');
const saCount = document.getElementsByClassName('sa-count')[0];
const saCountBg = document.getElementsByClassName('sa-count-bg')[0];
const saAppBg = document.getElementsByClassName('sa-app-bg')[0];
const saAppText = document.getElementsByClassName('sa-app-text')[0];
const saAppImg = document.getElementsByClassName('sa-app-img')[0];



setTimeout(() => {
    saTitle.classList.remove('mv-top-title');
    saTitle.classList.add('show');
}, 1600);


setTimeout(() => {
    saAppText.classList.add('show-opacity');
}, 6400);

setTimeout(() => {
    saAppBg.classList.remove('mv-left-bg');
}, 8000);

setTimeout(() => {
    saAppImg.classList.add('show-opacity');
}, 10400);


window.addEventListener('scroll', () => {
    for(let i = 0; i < saIntro.length; i++){
        if(saIntro[i].getBoundingClientRect().top - window.innerHeight < 0){
            saIntro[i].classList.remove('mv-left-intro');
            saIntro[i].classList.add('show');
        }
    }

    if(saCountBg.getBoundingClientRect().top - window.innerHeight < 0){
        saCountBg.classList.remove('mv-left-bg');
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var popupTrigger = document.querySelector('.popup-trigger');
    var popupWindow = null;

    popupTrigger.addEventListener('click', function(e) {
        e.preventDefault();

        // 팝업 창 크기와 위치를 설정해주세요.
        var width = 800;
        var height = 600;
        var left = (window.innerWidth - width) / 2;
        var top = (window.innerHeight - height) / 2;

        var url = 'https://www.socar.kr/'; // 실제 제휴 문의 페이지의 URL로 바꿔주세요.

        // 팝업 창을 엽니다.
        popupWindow = window.open(url, '제휴 문의', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top);
    });
});

const logoImg = document.querySelector('.main-logo-img');

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollBottom = scrollTop + window.innerHeight;

  const logoRect = logoImg.getBoundingClientRect();

  if (logoRect.top < scrollBottom && logoRect.bottom > scrollTop) {
    logoImg.style.backgroundImage = "url('./static/image/logo-w.svg')";
  } else {
    logoImg.style.backgroundImage = "url('./static/image/logo-blue.svg')";
  }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', () => {
  handleScroll(); // 초기 로딩 시 스크롤 위치에 따라 이미지 변경 적용
});


//여기서 부터 이름 다 바꿔야함.

/*
 <div class="HideBackground"></div>
        <div class="HideBanner"></div>
        <div class="HideContainer">
        포커스를 이 이름에 맞춰서 출력이 되게끔

*/

const hamburgerContainer = document.querySelector('.hamburger-container');///
const hamburgerButton = document.querySelector('.hamburger-button');///

hamburgerButton.addEventListener('click', () => {
  hamburgerContainer.classList.toggle('active');
});

const buttonTop = document.querySelector('.button-top');
const buttonBottom = document.querySelector('.button-bottom');


  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      buttonTop.classList.add('active');
      buttonBottom.classList.add('active');
    } else {
      buttonTop.classList.remove('active');
      buttonBottom.classList.remove('active');
    }
  });

  window.addEventListener('scroll', function() {
    var hamburgerButton = document.querySelector('.hamburger-button');
    var scrolledClass = 'scrolled';

    if (window.scrollY > 0) {
      hamburgerButton.classList.add(scrolledClass);
    } else {
      hamburgerButton.classList.remove(scrolledClass);
    }
  });



  window.addEventListener('scroll', function() {
    var hamburgerButton = document.querySelector('.hamburger-button');
    var banner = document.querySelector('.banner');
    var headerWrapper = document.querySelector('.header-wrapper');
    var scrolledClass = 'scrolled';
    var windowHeight = window.innerHeight;
    var scrollThreshold = windowHeight / 2;
  
    if (window.scrollY > 0) {
      hamburgerButton.classList.add(scrolledClass);
      banner.classList.add(scrolledClass);
      headerWrapper.style.display = 'block'; // 스크롤이 일정 지점 이전일 때 header-wrapper를 보이도록 설정
    } else {
      hamburgerButton.classList.remove(scrolledClass);
      banner.classList.remove(scrolledClass);
      headerWrapper.style.display = 'block';
    }
  
    if (window.scrollY > scrollThreshold) {
      hamburgerButton.classList.remove(scrolledClass);
      banner.classList.remove(scrolledClass);
      headerWrapper.style.display = 'none'; // 스크롤이 정해진 지점 이후일 때 header-wrapper를 가림
    } else {
      headerWrapper.style.display = 'block';
    }
  });
  
  const hamburgerButton1 = document.querySelector('.hamburger-button');
    hamburgerButton.addEventListener('click', function() {
    hamburgerButton1.classList.toggle('active');
  });
  
     // 대략 추측 했을때 흰색 그라데이션이 사라지게끔 하는 함수는
          // 여기까지인거 같음. 여기에서 if문을 하나 더 추가 시켜서 스크롤이
          // 어느 지점에 도달했을 때는 , 사라지는 조건이 있어야 함.
// 스크롤 지점 원하는 값 구하고 , 
//그 지점이 도달했을 때 , 스크롤이 없어지는 동작에 대한 함수를 구해서
// if문을 하나 더 넣어야한다.(위에 대한 설명)





// 스크롤 함수를 발동을 시켰을 때 , 내려가는 지점? 그 좌 표값을 구하는 방법을 대충
// 지피티 한테 일단 물어봐.


//이 위치의 지점을 값을 구했으면 , 우리가 그 임의의 위치를 지정해서 
// 그 부분까지 스크롤이 발동되었을 때 , 흰색 그라데이션 이 친구가 화면에서 사라져야함.