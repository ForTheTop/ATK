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
}, 200);



setTimeout(() => {
    saAppText.classList.add('show-opacity');
}, 800);

setTimeout(() => {
    saAppBg.classList.remove('mv-left-bg');
}, 1000);

setTimeout(() => {
    saAppImg.classList.add('show-opacity');
}, 1300);


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

const hamburgerContainer = document.querySelector('.hamburger-container');
const hamburgerButton = document.querySelector('.hamburger-button');

hamburgerButton.addEventListener('click', () => {
  hamburgerContainer.classList.toggle('active');
});

const buttonTop = document.querySelector('.button-top');
const buttonBottom = document.querySelector('.button-bottom');

window.addEventListener('scroll', () => {
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






//첫번째
//logo-img , banner , hamburgerButton을 감싸고 있는 전체 div
//header-wrapper 여기다가 저 식을 대입시키면?
// 뭔가 전부다 위로 올라가지않을까..

//두번째
//var header-wrapper의 변수를 줘서 display를 가리는 방식으로.
//header-wrapper.style.display="none";
