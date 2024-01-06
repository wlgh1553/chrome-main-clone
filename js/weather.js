const API_KEY = "ed43b8f90ade90ed47cace322688a1aa";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `city: ${data.name}`;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC`;
    });
}

function onGeoError() {
  weather.innerText = "위치 정보 없음";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
