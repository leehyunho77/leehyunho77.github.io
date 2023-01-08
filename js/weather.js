const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "20c2978e0d1253c999bed6c1f2458aae";

function onGeoOk(position) {
  console.log(position)

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("살고있는 위치", lat, lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}˚ `;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
