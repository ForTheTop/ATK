  const saTitle = document.getElementsByClassName('sa-title')[0];
  const saIntro = document.getElementsByClassName('sa-intro');
  const saCount = document.getElementsByClassName('sa-count')[0];
  const saCountBg = document.getElementsByClassName('sa-count-bg')[0];
  const saAppBg = document.getElementsByClassName('sa-app-bg')[0];
  const saAppText = document.getElementsByClassName('sa-app-text')[0];
  const saAppImg = document.getElementsByClassName('sa-app-img')[0];
  //saTitle , saIntro , saCount , saCountBg , saAppText , saAppBg , saAppImg에
  //대한 첫번째 요소를 가져온 후 ,  setTimeout 함수를 사용하여 일정 시간 간격 이 후에 ,
  //클래스를 추가하거나 제거를 해서 애니메이션 효과를 부여함.


  //우리가 시작한 메인 페이지 부분에서 처음에 등장하는 글씨 및 , 쏘카 앱 다운로드 부분
  //그리고 마우스 휠을 내릴 때 , 나타나는 text요소와 사진 , 섹션 컨테이너 부분 등.
  // setTimeout이 적용되어 이러한 부분들이 애니메이션 효과로 나타나게 된다.


  // 이 부분은 나타나는 지정한 초 이후에  해당하는 요소의 클래스를 제거하고 show 클래스를 추가 한 것임.
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



  /*

    현재 saIntro 요소가 화면에 보이는지 확인 후 
    getBoundingClientRect() 메서드를 이용하여 saIntro 요소의 위치 정보를 가져옴.
    top 속성은 요소의 상단 위치를 나타냄
    window.innerHeight는 현재 브라우저 창의 높이

  */


  // saIntro 요소의 top 부분이 브라우저 창의 높이 보다 작으면
  // saIntro 요소가 화면에 출력되는 상태면 아래의 포문을 실행한다.
  // 아래는 애니메이션 효과 관련 코드
  window.addEventListener('scroll', () => {
      for(let i = 0; i < saIntro.length; i++){
          if(saIntro[i].getBoundingClientRect().top - window.innerHeight < 0){
          // 해당 saIntro 요소에 'mv-left-intro' 클래스를 제거하여 왼쪽으로 이동하는 애니메이션 효과를 없앰.
              saIntro[i].classList.remove('mv-left-intro');
              // 대신 'show' 클래스를 추가하여 saIntro 요소가 화면에 보여지는 애니메이션 효과를 부여.
              saIntro[i].classList.add('show');
          }
      }

      if(saCountBg.getBoundingClientRect().top - window.innerHeight < 0){
          saCountBg.classList.remove('mv-left-bg');
      }
  })

  document.addEventListener('DOMContentLoaded', function() {
      //'popup-trigger' 클래스를 가진 요소를 찾기
      var popupTrigger = document.querySelector('.popup-trigger');
      var popupWindow = null;

      // 팝업 트리거 요소에 클릭 이벤트 리스너를 추가
      popupTrigger.addEventListener('click', function(e) {
          e.preventDefault();

          // 팝업 창 크기와 위치를 설정한다.
          var width = 800;
          var height = 600;
          var left = (window.innerWidth - width) / 2;
          var top = (window.innerHeight - height) / 2;

          var url = 'https://www.socar.kr/'; // 실제 제휴 문의 페이지의 URL로 바꿔주세요.

          // 팝업 창을 화면에 오픈
          popupWindow = window.open(url, '제휴 문의', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top);
      });
  });




    /*
      스크롤 이벤트를 감지했을 때 , 로고의 이미지의 색상이
      원 색상인 흰색이거나 #00b8ff(하늘색)색상 으로 바뀌도록
      핸들스크롤 함수 추가.
    */


    //첫번째로 , .main-logo-img 클래스를 가진 요소를 찾은 후 . 핸들 스크롤 함수를 추가한다.
  const logoImg = document.querySelector('.main-logo-img');

  function handleScroll() {
    //현재 스크롤 위치와 화면의 높이를 계산
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollBottom = scrollTop + window.innerHeight;
    //로고의 이미지 위치 및 크기 정보를 불러옴.
    const logoRect = logoImg.getBoundingClientRect();


      //로고의 이미지가 화면에 보일 때 ,  로고의 이미지의 색상을 변경하는 if문이다.
      //로고의 이미지가 화면에 보이면 logo-w.svg로 설정
      //스크롤을 살짝 내리면 logo-blue.svg로 설정

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
  const banner = document.querySelector(".banner");
  let isBanner=false;
  //Banner의 초기값을 false로 설정
  hamburgerButton.addEventListener('click', () => {
  isBanner=!isBanner;
    // Banner 의값을 반전시킵니다. 즉, true면 false로, false면 true로 바뀝니다.
    // 'active' 클래스를 햄버거 컨테이너 요소에 토글합니다.
    // *toggle: 해당 클래스가 없으면 추가 ,  있으면 제거하는 동작.
    hamburgerContainer.classList.toggle('active');
  });

  const buttonTop = document.querySelector('.button-top');
  const buttonBottom = document.querySelector('.button-bottom');

  /*

    스크롤 이벤트를 감지하여 , scrollPostion이 0보다 클 경우 , header 부분의
    흰색 Banner의 부분을 화면에 나타나도록 설정한다.
    
    
    스크롤 위치가 최상단일 경우 if문을 설정해서 화면에서 header 부분의 흰색
    Banner가 사라지도록 설정

  */ 

    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      //현재 스크롤 위치를 변수로 설정.

      // 이 부분은 0보다 크거나 0일때(최상단)일 때 , if문을 사용하여
      // active 클래스 버튼 요소들을 추가,제거한다.
      if (scrollPosition > 0) {
        buttonTop.classList.add('active');
        buttonBottom.classList.add('active');
      } else {
        buttonTop.classList.remove('active');
        buttonBottom.classList.remove('active');
      }
    });


    //스크롤이 0보다 크거나 큰 경우가 아닌 경우 , 
    //흰색 배너의 부분이 화면에 출력되거나 제거되는 동작.
    window.addEventListener('scroll', function() {
      var hamburgerButton = document.querySelector('.hamburger-button');
      var scrolledClass = 'scrolled';

      if (window.scrollY > 0) {
        hamburgerButton.classList.add(scrolledClass);
      } else {
        hamburgerButton.classList.remove(scrolledClass);
      }
    });



    //스크롤 휠을 임의의 지점을 계산한 후 , 그 지점까지 내렸을 때 , header 부분의 
    //banner 구간이 가려지게끔 하고 다시 그 지점의 위로 올라가면 header 부분의 banner가 보이게
    //되는 스크롤 이벤트 함수.
    //투명 배너 가리는 부분 스크롤 이벤트//

    window.addEventListener('scroll', function() {
      var hamburgerButton = document.querySelector('.hamburger-button');
      var banner = document.querySelector('.banner');
      var headerWrapper = document.querySelector('.header-wrapper');
      var scrolledClass = 'scrolled';
      var windowHeight = window.innerHeight;
      var scrollThreshold = windowHeight / 8;
      //스크롤을 임의의 지점을 정한 후  , 꺼질 지점을 계산
      //스크롤을 일정 지점을 내렸을 때 , button , banner ,header-wrapper 부분이
      // 가려져야 하기 때문에 관련된 변수를 모두 입력
    

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



      //모달 창 만들기 //
      //먼저 껏다 킬 수 있도록 클릭 이벤트를 줌
      //햄버거 버튼 작동시 , hide_banner 부분을 실행하는 함수
      //바뀐 햄버거 버튼의 X표시를 눌렀을 때 , hide_banner 부분이 다시 들어가야함.
      //모달창에 관련된 클릭 이벤트 //

      const hamburgerButton1 = document.querySelector('.hamburger-button');
      const logoImg1 = document.querySelector('.main-logo-img');

      hamburgerButton.addEventListener('click', function() {
      hamburgerButton1.classList.toggle('active');
      document.getElementsByClassName("hide_banner")[0].classList.toggle("banner_hide");
          // 햄버거 버튼 이벤트 클릭 시 , banner_hide 부분이 나오게 함
          // 햄버거 X 버튼을 다시 누를 시 , Banner_hide 부분이 가려짐.
          // 이 두가지 동작을 toggle(두가지 동작 모두 포함함.) 을 사용하여 출력
      const isBlueLogo = logoImg1.style.backgroundImage.includes('logo-blue.svg');
      if (isBlueLogo) {
        logoImg1.style.backgroundImage = "url('./static/image/logo-w.svg')";
      } else {
        logoImg1.style.backgroundImage = "url('./static/image/logo-blue.svg')";
      }
    });


      /*

        스크롤 이벤트 동작 시 , banner_hide 부분이 가려졌다가 다시 나타나는 부분
        active 부분이 삭제

        HamburgerButton을 먼저 클릭 후 , hide_banner 전체 부분이 보일 때 , 
        스크롤 휠을 아래 위로 동작 했을 때 가려지거나 다시 보이게 하는 기능의 함수

        햄버거 메뉴가 x표시 일때는 true로 (버튼을 눌러서 Banner_hide 부분이 작동할 때 )
        =표시 일때는 false로 됨 (버튼을 눌러서 Banner_hide 부분이 꺼질 때)
        그래서 false일때는 active가 안되고 true일때는 active가 붙어서 그대로 동작을 하게 됨.

      */

      //모달창에 관련된 스크롤 이벤트 동작 //
    window.addEventListener('scroll', function() { //스크롤 휠을 아래로 내렸을 때 hide_banner 부분이 가려짐.
      if (window.scrollY > 0) {
        hamburgerContainer.classList.remove('active');
        hamburgerButton1.classList.remove('active');
        document.getElementsByClassName("hide_banner")[0].classList.add("banner_hide");
      }
      
        else { // 스크롤 위치가 최상단일 때 ,  다시 hide_banner 부분이 나타나게 됌.
        if(isBanner){
          hamburgerContainer.classList.add('active');
          hamburgerButton1.classList.add('active');
          document.getElementsByClassName("hide_banner")[0].classList.remove("banner_hide");
            }
          }
      });