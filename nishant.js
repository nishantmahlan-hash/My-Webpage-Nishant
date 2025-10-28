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
