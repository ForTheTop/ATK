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
}, 400);

setTimeout(() => {
    saAppBg.classList.remove('mv-left-bg');
}, 800);

setTimeout(() => {
    saAppImg.classList.add('show-opacity');
}, 1600);


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



  //여기에 햄버거 버튼을 눌렀을 때 , 햄버거 컨테이너가 나오는 동시에
  //배경화면색이 rgba(0, 0, 0, 0.85) 이걸로 바뀌어야 함.
  // z-index , 버튼을 눌렀을 때 배경 화면이랑 
  // 배너의 색 부분도 색상에 맞게 바뀌어야한다.


window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', () => {
  handleScroll(); // 초기 로딩 시 스크롤 위치에 따라 이미지 변경 적용
});

const hamburgerContainer = document.querySelector('.hamburger-container');
const hamburgerButton = document.querySelector('.hamburger-button');
const banner = document.querySelector(".banner");
let isBanner=false;
hamburgerButton.addEventListener('click', () => {
  isBanner=!isBanner;
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


  /* 
    스크롤을 어느정도의 지점까지 내려 갔을 때 , 그 임의의 지점을 계산 후 ,
    banner , hamburgerButton , logo-img를 감싸고 있는
    header-wrapper 부분을 보이거나 가리도록 설정해야한다.
    스크롤이 일정 지점 이전일 때 , header-wrapper를 보이도록 설정
    스크롤이 정해진 지점 이후 일 때는  header-wrapper 부분을 가려서 안보이게 설정
  */

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



  window.addEventListener('scroll', function() {
    var hamburgerButton = document.querySelector('.hamburger-button');
    var banner = document.querySelector('.banner');
    var headerWrapper = document.querySelector('.header-wrapper');
    var scrolledClass = 'scrolled';
    var windowHeight = window.innerHeight;
    var scrollThreshold = windowHeight / 10;
  
    if (window.scrollY > 0) {
      hamburgerButton.classList.add(scrolledClass);
      banner.classList.add(scrolledClass);
      headerWrapper.style.display = 'block';
      // 스크롤이 일정 지점 이전일 때 header-wrapper를 보이도록 설정 
    } else {
      hamburgerButton.classList.remove(scrolledClass);
      banner.classList.remove(scrolledClass);
      headerWrapper.style.display = 'block';
    }
  
    if (window.scrollY > scrollThreshold) {
      hamburgerButton.classList.remove(scrolledClass);
      banner.classList.remove(scrolledClass);
      headerWrapper.style.display = 'none';
       // 스크롤이 정해진 지점 이후일 때 header-wrapper를 가림
    } else {
      headerWrapper.style.display = 'block';
    }
  });

    const hamburgerButton1 = document.querySelector('.hamburger-button');
    const logoImg1 = document.querySelector('.main-logo-img');
    
    hamburgerButton.addEventListener('click', function() {
    hamburgerButton1.classList.toggle('active');
    document.getElementsByClassName("hide_banner")[0].classList.toggle("banner_hide");
    const isBlueLogo = logoImg1.style.backgroundImage.includes('logo-blue.svg');
        // 햄버거 버튼 이벤트 클릭 시 , banner_hide 부분이 나오게 토글을 줌.
        // 햄버거 X 버튼을 다시 누를 시 , Banner_hide 부분이 가려짐.
    if (isBlueLogo) {
      logoImg1.style.backgroundImage = "url('./static/image/logo-w.svg')";
    } else {
      logoImg1.style.backgroundImage = "url('./static/image/logo-blue.svg')";
    }
  });

    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        hamburgerContainer.classList.remove('active');
        hamburgerButton1.classList.remove('active');
        document.getElementsByClassName("hide_banner")[0].classList.add("banner_hide");
        const isBlueLogo = logoImg1.style.backgroundImage.includes('logo-blue.svg');
        // 스크롤 이벤트 동작 시 , banner_hide 부분이 추가 됨
        // active 부분이 삭제
        if (isBlueLogo) {
          logoImg1.style.backgroundImage = "url('./static/image/logo-w.svg')";
        } else {
          logoImg1.style.backgroundImage = "url('./static/image/logo-blue.svg')";
        }
      }

      else { // 스크롤 위치가 최상단일 때
        if(isBanner){
          hamburgerContainer.classList.add('active');
          hamburgerButton1.classList.add('active');
          document.getElementsByClassName("hide_banner")[0].classList.remove("banner_hide");
          const isBlueLogo = logoImg1.style.backgroundImage.includes('logo-blue.svg');
  
        if (isBlueLogo) {
          logoImg1.style.backgroundImage = "url('./static/image/logo-w.svg')";
        }else {
          logoImg1.style.backgroundImage = "url('./static/image/logo-blue.svg')";
        }
      }
     //  햄버거 메뉴가 x표시 일때는 true로 (버튼을 눌러서 Banner_hide 부분이 작동할 때 )
      //  =표시 일때는 false로 됨 (버튼을 눌러서 Banner_hide 부분이 꺼질 때)
    // 그래서 false일때는 active가 안되고 true일때는 active가 붙어서 그대로 동작을 하게 됨
      }
  
});











//햄버거 버튼 작동시 , hide_banner 부분을 실행하는 함수
//바뀐 햄버거 버튼의 X표시를 눌렀을 때 , hide_banner 부분이 다시 들어가야함.



