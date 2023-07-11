function calculateAverage() {
    var koreanScore = parseInt(document.getElementById('korean').value);
    var englishScore = parseInt(document.getElementById('english').value);
    var mathScore = parseInt(document.getElementById('math').value);
    
    var average = (koreanScore + englishScore + mathScore) / 3;
    
    var grade;
    if (average >= 90 && average <= 100) {
      grade = 'A';
    } else if (average >= 80 && average <= 89) {
      grade = 'B';
    } else if (average >= 70 && average <= 79) {
      grade = 'C';
    } else {
      grade = 'F';
    }
    
    document.getElementById('result').innerText = '평균 점수: ' + average.toFixed(2) + ', 학점: ' + grade;
  }