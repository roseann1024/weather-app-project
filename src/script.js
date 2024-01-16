function searchButton(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-input-city");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
}

let formInput = document.querySelector("#form-input");
formInput.addEventListener("submit", searchButton);
