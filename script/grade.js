function startGradeCalculator() {
    var subjects = ["HTML", "CSS", "JavaScript"]; //과목 이름이 담긴 변수
    var total = 0; //총점을 저장할 변수

    for (var i = 0; i < subjects.length; i++) { //배열의 길이만큼 돌리면서
        while (true) {
            var input = prompt(subjects[i] + " 점수를 입력하세요."); //각 과목의 점수를 연속해서 입력받기

            if (input === null) {
                alert("성적 계산을 취소했습니다.");
                return;
            }

            var score = Number(input);


            if (
                input.trim() !== "" && Number.isInteger(score) &&
                score >= 0 && score <= 100
            ) {//올바른 값이 입력됐을 때
                total += score;
                break;
            }

            alert("0부터 100 사이의 점수를 입력해 주세요.");
        }
    }

    var average = total / subjects.length;
    var result = average >= 60 ? "합격" : "불합격";
    var grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert(
        "총점: " + total +
        "점, 평균: " + average.toFixed(1) +
        "점, 등급: " + grade +
        ", 결과: " + result + "입니다!"
    );
}

document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.querySelector("#grade-start");

    if (startButton) {
        startButton.addEventListener("click", startGradeCalculator);
    }
});
