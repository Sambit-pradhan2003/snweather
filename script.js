async function getWeather() {
    const cityInput = document.getElementById('city-input').value;
    const apiKey = 'a72656942e01455f95292154241004'; // Replace with your API key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?q=${cityInput}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weather-info').innerHTML = 'City not found';
        } else {
            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
