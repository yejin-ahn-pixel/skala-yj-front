

function startUpDownGame() {
    const computerNum = Math.floor(Math.random() * 50) + 1;
    let count = 0;

    while (true) {
        const input = prompt("1부터 50 사이의 숫자를 입력하세요.");

        if (input === null) {
            alert("게임을 종료합니다.");
            return;
        }

        const trimmedInput = input.trim();
        const userNum = Number(trimmedInput);

        if (
            trimmedInput === "" ||
            !Number.isInteger(userNum) ||
            userNum < 1 ||
            userNum > 50
        ) {
            alert("1부터 50 사이의 정수를 입력해 주세요.");
            continue;
        }

        count += 1;

        if (userNum > computerNum) {
            alert("Down!");
        } else if (userNum < computerNum) {
            alert("Up!");
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
