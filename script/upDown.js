

function startUpDownGame() {
    const computerNum = Math.floor(Math.random() * 50) + 1;
    let count = 0;

    while (true) {
        const input = prompt("1부터 50 사이의 숫자를 입력하세요.");

        // 게임 취소 버튼 구현하기
        if (input === null) {
            alert("게임을 종료합니다.");
            return;
        }


        // 빈칸, 공백, 정수가 아닌 경우, 1~50 범위를 벗어난 경우 실수일 수 있으니 continue로 이어가기
        const userNum = Number(input);

        if (
            input.trim() === "" ||
            !Number.isInteger(userNum) ||
            userNum < 1 ||
            userNum > 50
        ) {
            alert("잘못된 값입니다. 1부터 50 사이의 정수를 입력해 주세요.");
            continue;
        }

        count += 1;

        if (userNum > computerNum) {
            alert(`Down! 더 낮은 숫자를 입력하세요.시도: ${count}회`);
        } else if (userNum < computerNum) {
            alert(`Up! 더 높은 숫자를 입력하세요. 시도: ${count}회`);
        } else {
            alert(`축하합니다! ${count}번 만에 맞추셨습니다.`);
            return;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector("#up-down-start");

    if (startButton) {
        startButton.addEventListener("click", startUpDownGame);
    }
});
