document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("search-box");
  const searchButton = document.getElementById("search-button");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");

  searchButton.addEventListener("click", function () {
    const city = searchBox.value;
    if (city === "") return;

    // Replace 'YOUR_API_KEY' with your OpenWeather API key
    const apiKey = "";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        cityName.textContent = data.name;
        temperature.textContent = `${data.main.temp}°C`;
        description.textContent = data.weather[0].description;
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        cityName.textContent = "City not found";
        temperature.textContent = "";
        description.textContent = "";
      });
  });
});
