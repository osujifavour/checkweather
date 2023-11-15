const apiKey = '9a154b304c7e22d7f0a1a2aa0f267d7e';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.getElementById('cityname');
const searchBtn = document.getElementById('citySubmit');
const weatherIcon = document.getElementById('weather-icon');
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  if (response.status == 404) {
    document.getElementById('error').style.display = 'block';
    document.getElementById('hid').style.display = 'none';
  } else {
    document.getElementById('error').style.display = 'none';
    document.getElementById('hid').style.display = 'contents';
    document.getElementById('hid').style.transitionTimingFunction = '5s';

    switch (true) {
      case data.weather[0].main == 'Mist':
        weatherIcon.src = './mist.png';
        break;
      case data.weather[0].main == 'Clouds':
        weatherIcon.src = './clouds.png';
        break;
      case data.weather[0].main == 'Drizzle':
        weatherIcon.src = './drizzle.png';
        break;
      case data.weather[0].main == 'Snow':
        weatherIcon.src = './snow.png';
        break;
      case data.weather[0].main == 'Rain':
        weatherIcon.src = './rain.png';
        break;
      case data.weather[0].main == 'Clear':
        weatherIcon.src = './clear.png';
        break;
      case data.weather[0].main == 'Drizzle':
        weatherIcon.src = './drizzle.png';
        break;
    }
  }

  document.getElementById('displayCity').innerHTML = data.name;
  document.getElementById('results').innerHTML =
    Math.round(data.main.temp) + '°c';
  document.getElementById('humidity').innerHTML = data.main.humidity + '%';
  document.getElementById('wind').innerHTML = data.wind.speed + ' km/h';
}
searchBtn.onclick = function () {
  checkWeather(searchBox.value);
  welcome.innerHTML = 'Would You Love To Checkout Other Cities';
};

const welcome = document.getElementById('welcome');

// searchBox Functionality
searchBox.onclick = function () {
  welcome.innerHTML = 'Which city current weather would you love to know?';
};
searchBox.onmouseleave = function () {
  welcome.innerHTML = 'Check The Current Weather Of Any City';
};
