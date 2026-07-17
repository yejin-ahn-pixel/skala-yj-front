import { cities, weatherDescriptions, fetchWeather } from "./weatherAPI.js";

document.addEventListener("DOMContentLoaded", () => {
    const citySelect = document.querySelector("#city-select");
    const cityResult = document.querySelector("#city-result");

    if (!citySelect || !cityResult) {
        return;
    }

    citySelect.addEventListener("change", async () => {
        const selectedCity = cities[citySelect.value];

        if (!selectedCity) {
            cityResult.innerHTML = "";
            return;
        }

        cityResult.innerHTML = "로딩 중… ⏳";

        try {
            const weatherData = await fetchWeather(selectedCity);
            const temperature = weatherData.current.temperature_2m;
            const humidity = weatherData.current.relative_humidity_2m;
            const precipitation = weatherData.current.precipitation;
            const weatherCode = weatherData.current.weather_code;
            const weatherDescription = weatherDescriptions[weatherCode] || "알 수 없는 날씨";
            const temperatureUnit = weatherData.current_units.temperature_2m;
            const humidityUnit = weatherData.current_units.relative_humidity_2m;
            const precipitationUnit = weatherData.current_units.precipitation;

            cityResult.innerHTML = `
                <strong>${selectedCity.name}</strong>
                <small class="city-country">${selectedCity.country} ${selectedCity.flag}</small><br>
                🌤️ 날씨: ${weatherDescription}<br>
                🌡️ 현재 온도: ${temperature}${temperatureUnit}<br>
                💧 현재 습도: ${humidity}${humidityUnit}<br>
                ☔ 현재 강수량: ${precipitation}${precipitationUnit}`;
        } catch (error) {
            cityResult.innerHTML = "날씨 정보를 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.";
            console.error(error);
        }
    });
});
