// Simple JS interaction
document.getElementById('greetBtn').addEventListener('click', function() {
  document.getElementById('greetText').textContent = "Hello Nishant! Welcome to your webpage 🙂";
});
// Weather section logic
const weatherForm = document.getElementById('weatherForm');
if (weatherForm) {
  weatherForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();

    const weatherOutput = document.getElementById('weatherOutput');
    weatherOutput.textContent = "Fetching weather...";

    // ⚠️ Replace YOUR_API_KEY with your actual key from openweathermap.org
    const apiKey = e27b9d3c1ba2f272c9d26921548a86a1;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},${encodeURIComponent(state)},IN&appid=${apiKey}&units=metric`;

    try {
      console.log("Fetching:", url);
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();

      const temp = data.main.temp;
      const condition = data.weather[0].description;
      const humidity = data.main.humidity;

      weatherOutput.innerHTML = 
        `🌤️ Weather in <strong>${city}</strong>: ${condition}<br>` +
        `🌡️ Temperature: ${temp}°C<br>` +
        `💧 Humidity: ${humidity}%`;
    } catch (err) {
      weatherOutput.textContent = "Sorry, weather info not available. Please check the city name.";
    }

    weatherForm.reset();
  });
        }
// Weather Fetch with Proxy (Works on GitHub Pages)
async function getWeather() {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=metric`;

  // Proxy to bypass CORS
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

  document.getElementById("weatherResult").textContent = "Fetching weather...";

  try {
    const response = await fetch(proxyUrl);
    const data = await response.json();
    const weatherData = JSON.parse(data.contents);

    if (weatherData.cod === 200) {
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const place = `${weatherData.name}, ${weatherData.sys.country}`;
      document.getElementById("weatherResult").innerHTML =
        `🌤️ Weather in <b>${place}</b>: ${temp}°C, ${desc}`;
    } else {
      document.getElementById("weatherResult").textContent =
        "❌ City not found. Please try again.";
    }
  } catch (error) {
    console.error(error);
    document.getElementById("weatherResult").textContent =
      "⚠️ Unable to fetch weather data. Try again later.";
  }
}

// Optional: add button click event
document.getElementById("weatherBtn").addEventListener("click", getWeather);
