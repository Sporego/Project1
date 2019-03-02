let backgroundArray = [
  "../images/background1.jpg",
  "../images/background2.jpg",
  "../images/background3.jpg",
  "../images/background4.jpg"
];
let city = "New York";
let APIkeyWeather = "70c19500496f9aecbd97ff861d3072ee";
let queryURLWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&units=imperial&appid=" +
  APIkeyWeather;

$.ajax({
  url: queryURLWeather,
  method: "GET"
}).then(function(response) {
  console.log(response);
  let temperatureAndCity = $("<p>").text(
    response.name.toUpperCase() + ": " + response.main.temp + "° F "
  );
  temperatureAndCity.attr("class", "displayTemp");
  let arr = [];
  for (let i = 0; i < response.weather.length; i++) {
    arr.push(response.weather[i].icon);
    console.log(arr);
  }
  for (let i = 0; i < arr.length; i++) {
    let imgWeather = $("<img>").attr(
      "src",
      "http://openweathermap.org/img/w/" + arr[i] + ".png"
    );
    imgWeather.css("filter", "grayscale(100%)");
    $("#weather").append(imgWeather);
  }
  $("#weather").append(temperatureAndCity);
});
