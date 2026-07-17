export const cities = {
    seoul: {
        name: "서울",
        country: "대한민국",
        flag: "🇰🇷",
        longitude: 126.9780,
        latitude: 37.5665
    },
    nara: {
        name: "나라",
        country: "일본",
        flag: "🇯🇵",
        longitude: 135.8048,
        latitude: 34.6851
    },
    toronto: {
        name: "토론토",
        country: "캐나다",
        flag: "🇨🇦",
        longitude: -79.3832,
        latitude: 43.6532
    }
};

export const weatherDescriptions = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "서리 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    56: "약한 어는 이슬비",
    57: "강한 어는 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    66: "약한 어는 비",
    67: "강한 어는 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
    77: "싸락눈",
    80: "약한 소나기",
    81: "보통 소나기",
    82: "강한 소나기",
    85: "약한 눈 소나기",
    86: "강한 눈 소나기",
    95: "천둥번개",
    96: "약한 우박을 동반한 천둥번개",
    99: "강한 우박을 동반한 천둥번개"
};

export async function fetchWeather(city) {
    const params = new URLSearchParams({
        latitude: city.latitude,
        longitude: city.longitude,
        current: "temperature_2m,relative_humidity_2m,precipitation,weather_code"
    });
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);

    if (!response.ok) {
        throw new Error("날씨 데이터를 불러오지 못했습니다.");
    }

    return response.json();
}
