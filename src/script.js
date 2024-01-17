function displayTemp(response) {
  let temperatureElement = document.querySelector("#weather-app-temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "f78a0dbafabf13190c441b8cod34ftff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function searchButton(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-input-city");

  searchCity(searchInput.value);
}

let formInput = document.querySelector("#form-input");
formInput.addEventListener("submit", searchButton);

searchCity("Centennial");
