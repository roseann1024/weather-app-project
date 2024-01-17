function displayTemp(response) {
  c
}

function searchCity(city) {
  let apiKey = "f78a0dbafabf13190c441b8cod34ftff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function searchButton(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-input-city");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;

  searchCity(searchInput.value);
}

let formInput = document.querySelector("#form-input");
formInput.addEventListener("submit", searchButton);
