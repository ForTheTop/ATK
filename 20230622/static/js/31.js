var currentPlayer = "Player";
var currentNumber = 0;

function playGame() {
  var inputNumbers = document.getElementById('input-numbers').value;
  var numbersArray = inputNumbers.split(',');

  // 입력이 유효한지 확인
  if (isValidInput(numbersArray)) {
    // 턴 정보 업데이트
    currentNumber += numbersArray.length;

    // 게임 상태 확인
    if (currentNumber >= 31) {
      // 게임 종료
      alert(currentPlayer + ' 패배!');
      resetGame();
    } else {
      // 플레이어 전환
      switchPlayer();
      
      // 컴퓨터 숫자 불러오기
      var computerNumbers = getComputerNumbers();
      
      // 게임 정보 업데이트
      document.getElementById('game-info').textContent = '현재 수: ' + currentNumber + ' (' + currentPlayer + ' 차례)';
      if (computerNumbers.length > 0) {
        document.getElementById('game-info').textContent += ' | 컴퓨터: ' + computerNumbers.join(', ');
      }
    }
  } else {
    alert('올바른 숫자를 입력하세요!');
  }
}

function isValidInput(numbersArray) {
  // 입력된 숫자 배열 검증
  if (numbersArray.length === 0 || numbersArray.length > 3) {
    return false;
  }

  for (var i = 0; i < numbersArray.length; i++) {
    var number = parseInt(numbersArray[i]);

    if (isNaN(number) || number < 1 || number > 3) {
      return false;
    }
  }

  return true;
}

function getComputerNumbers() {
  var computerNumbers = [];
  var remainingNumbers = 31 - currentNumber;
  var computerChoice = Math.min(remainingNumbers, Math.floor(Math.random() * 3) + 1);

  for (var i = 0; i < computerChoice; i++) {
    currentNumber++;
    computerNumbers.push(currentNumber);
  }

  return computerNumbers;
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'Player' ? 'Computer' : 'Player';
}

function resetGame() {
  currentNumber = 0;
  currentPlayer = 'Player';
  document.getElementById('input-numbers').value = '';
  document.getElementById('game-info').textContent = '';
}