    //필요한 데이터: 랜덤 숫자, 횟수카운트, 카운트다운, 최소값, 최대값

        //최대범위를 저장할 변수
        const MAX = 100;

        //게임에 필요한 데이터를 모아놓을 객체
        const gameData = {
            secret_num: Math.floor(Math.random() * MAX) + 1,
            count: 0,
            countdown: 6,
            min: 1,
            max: MAX
        };

        ////////////////////////함수 정의부///////////////////////////////

        //사용자의 입력을 수행하는 함수
        function inputNumber() {

            let {secret_num, count, countdown, min, max} = gameData;

            //객체에서 min과 max의 값을 뽑아서 메세지를 완성.
            //객체 디스트럭쳐링으로 뽑아 보세요~

            let answer = +prompt(`[${gameData.min} ~ ${gameData.max}]`);

            if(answer>gameData.max || answer<gameData.min) {
                alert(`제대로 입력하세요.`);
                return false;
            }

            //사용자의 입력값을 객체에 추가
            gameData.answer = answer;


            //입력값 검증 함수를 호출.
            return checkNumber();

        }

        //사용자의 입력값을 검증하는 함수
        function checkNumber() {

            gameData.count++;
            gameData.countdown--;

            if(gameData.secret_num === gameData.answer) {
                alert(`정답!`);
                checkCountDown(gameData.countdown);
                return true;
            }

            if(gameData.secret_num > gameData.answer) {
                alert(`UP`);
                gameData.min = gameData.answer+1;
            } else if(gameData.secret_num < gameData.answer) {
                alert(`DOWN`);
                gameData.max = gameData.answer-1;
            }
            alertCountDown(gameData.countdown);
            return false;
        }

        //사용자의 카운트다운을 체크하여 승리 여부를 알려주는 함수
        function checkCountDown(countdown) {
            if(countdown>=0) {
                alert(`승리\n${gameData.count}번 만에 맞췄습니다.`);
            } else {
                alert(`실패.\n${gameData.count}번 만에 맞췄습니다.`);
            }
        }


        //사용자의 남은 카운트다운 횟수를 알려주는 함수
        function alertCountDown(countdown) {
            if(countdown>0) {
                alert(`남은 기회: ${gameData.countdown}`);
            } else if(countdown===0) {
                alert('기회가 모두 소진됐어요\n그래도 계속 맞춰보세요.');
            }
        }


        //핵심 실행부 (main의 역할을 하는 함수)
        //즉시 실행 함수로 선언하여 따로 호출하지 않아도
        //바로 실행될 수 있도록 작성.

        (function () {
            alert('[UP & DOWN 게임  1 ~ 100 사이의 숫자를 맞춰보세요!]');
            inputNumber();
            //입력을 담당하는 함수를 호출할 예정.
            while (!inputNumber()) {
                //true가 리턴되면 프로그램 종료.
                //false가 리턴되면 게임 계속 진행.
            }

        }());