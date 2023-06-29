const matches = document.querySelectorAll('.match');
        let selectedCount = 0;

        matches.forEach(match => {
            match.addEventListener('click', () => {
                if (selectedCount < 1) {
                    match.classList.add('selected');
                    selectedCount++;
                } else {
                    // 이미지를 클릭하면 다음 라운드로 이동하는 로직 추가
                    console.log('다음 라운드로 이동');
                }
            });
        });