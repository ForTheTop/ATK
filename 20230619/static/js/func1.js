function calculateGrade() {
    var korean = parseFloat(document.getElementById("korean").value);
    var math = parseFloat(document.getElementById("math").value);
    var english = parseFloat(document.getElementById("english").value);
   // 각 과목의 등급 계산
    var koreanGrade = calculateLetterGrade(korean);
    var mathGrade = calculateLetterGrade(math);
    var englishGrade = calculateLetterGrade(english);

    document.getElementById("korean-grade").innerHTML = koreanGrade;
    document.getElementById("math-grade").innerHTML = mathGrade;
    document.getElementById("english-grade").innerHTML = englishGrade;
    // 평균 등급 계산
    var average = (korean + math + english) / 3;
    var averageGrade = calculateLetterGrade(average);
    // 평균 등급 출력
    document.getElementById("average-grade").innerHTML = averageGrade;
  }
  // 점수에 따른 등급 계산 함수
  function calculateLetterGrade(score) {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score <= 89) {
      return "B";
    } else if (score >= 70 && score <= 79) {
      return "C";
    } else {
      return "F";
    }
  }
  // 페이지 로드 시 등급 계산 함수를 실행하고,
  // 입력값이 변경될 때마다 다시 실행
  window.onload = function() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", calculateGrade);
    }
  }