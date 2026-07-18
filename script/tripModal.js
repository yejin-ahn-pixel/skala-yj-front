const tripDetails = {
    toronto: {
        title: "캐나다 토론토",
        date: "2025년 8월",
        description: "토론토 도심과 섬을 둘러본 여행입니다.",
        images: [
            "../media/모달_토론토(2).jpg",
            "../media/모달_토론토(3).jpg",
            "../media/모달_토론토(5).png"
        ],
        highlights: ["토론토 아일랜드", "토론토 대학교(U of T)", "Queen Street"]
    },
    aichi: {
        title: "일본 아이치",
        date: "2024년 1월",
        description: "지브리 파크와 나고야를 방문한 여행입니다.",
        images: [
            "../media/모달_아이치(1).jpg",
            "../media/모달_아이치(2).jpg",
            "../media/모달_아이치(3).jpg"
        ],
        highlights: ["지브리 파크", "나고야 시내", "시라카와고"]
    },
    tottori: {
        title: "일본 돗토리",
        date: "2023년 10월",
        description: "돗토리 사구와 해안 도시를 둘러본 여행입니다.",
        images: [
            "../media/모달_돗토리(1).jpg",
            "../media/모달_돗토리(2).jpg",
            "../media/모달_돗토리(3).jpg"
        ],
        highlights: ["돗토리 사구", "요나고", "아오야마 고쇼 후루사토관"]
    }
};

const modal = document.querySelector("#trip-modal");
const modalTitle = document.querySelector("#trip-modal-title");
const modalDate = document.querySelector("#trip-modal-date");
const modalDescription = document.querySelector("#trip-modal-description");
const modalGallery = document.querySelector("#trip-modal-gallery");
const modalHighlights = document.querySelector("#trip-modal-highlights");
const closeButton = document.querySelector(".trip-modal-close");
const tripCards = document.querySelectorAll(".trip-card[data-trip]");

let lastFocusedElement = null;

function openModal(card) {
    const detail = tripDetails[card.dataset.trip];

    if (!detail) {
        return;
    }

    lastFocusedElement = document.activeElement;
    modalTitle.textContent = detail.title;
    modalDate.textContent = detail.date;
    modalDescription.textContent = detail.description;
    modalGallery.replaceChildren(
        ...detail.images.map((imagePath, index) => {
            const image = document.createElement("img");
            image.src = imagePath;
            image.alt = `${detail.title} 여행 사진 ${index + 1}`;
            return image;
        })
    );
    modalHighlights.replaceChildren(
        ...detail.highlights.map((place) => {
            const item = document.createElement("li");
            item.textContent = place;
            return item;
        })
    );

    modal.hidden = false;
    document.body.classList.add("modal-open");
    closeButton.focus();
}

function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    lastFocusedElement?.focus();
}

tripCards.forEach((card) => {
    card.addEventListener("click", () => openModal(card));
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});
