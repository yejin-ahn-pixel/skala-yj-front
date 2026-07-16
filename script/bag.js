function showMyBag() {
    const myBag = [
        { name: "이어폰", count: 2 },
        { name: "스마트폰 충전기", count: 1 },
        { name: "미니 약통", count: 1 }
        { name: "보조배터리", count: 1 }
    ];

    let message = "👜 왓츠 인 마이 백\n\n";
    let totalCount = 0;

    for (const item of myBag) {
        message += `• ${item.name} : ${item.count}개\n`;
        totalCount += item.count;
    }

    message += `\n총 물품 종류: ${myBag.length}가지`;
    message += `\n총 물품 개수: ${totalCount}개`;

    alert(message);
}

document.addEventListener("DOMContentLoaded", () => {
    const bagButton = document.querySelector("#bag-start");

    if (bagButton) {
        bagButton.addEventListener("click", showMyBag);
    }
});