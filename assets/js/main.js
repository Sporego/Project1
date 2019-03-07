$(".results").hide();
$("#category-text").hide();
$(".btn").hide();
AOS.init();
let city = "New York";
let satrtDate;
let endDate;
let APIkeyNews = "rVruAxBlYzZYu9EleoRs0Vbwvuo0NZ6c";
let queryURLNews =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:Culture&Arts&Museums&glocations:NEW+YORK+CITY&sort=newest&api-key=" +
  APIkeyNews;

let APIkeyWeather = "70c19500496f9aecbd97ff861d3072ee";
let queryURLWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&units=imperial&appid=" +
  APIkeyWeather;

$.ajax({
  url: queryURLNews,
  method: "GET"
}).then(function(news) {
  console.log(queryURLNews);

  console.log(news);
  let response = news.response;
  for (let i = 0; i < response.docs.length; i++) {
    let cardDivNews = $("<div>").attr("class", "card");
    let imgNews = $("<img>")
      .attr(
        "src",
        "https://static01.nyt.com/" + response.docs[i].multimedia[0].url
      )
      .attr("class", "img-fluid");
    let cardBodyDivNews = $("<div>").attr("class", "card-body");
    let cardTitleNews = $("<h5>")
      .text(response.docs[i].headline.main)
      .attr("class", "card-title");
    let cardTextNews = $("<p>")
      .text(response.docs[i].snippet)
      .attr("class", "card-text");

    let linkNews = $("<a>")
      .attr("href", response.docs[i].web_url)
      .attr("class", "btn btn-dark btn-news")
      .text("Read Article");
    cardBodyDivNews.append(cardTitleNews, cardTextNews, linkNews);
    cardDivNews.append(imgNews, cardBodyDivNews);
    $("#displayNews").append(cardDivNews);
  }
});

$.ajax({
  url: queryURLWeather,
  method: "GET"
}).then(function(response) {
  let temperatureAndCity = $("<p>").text(
    response.name.toUpperCase() + ": " + response.main.temp + "° F "
  );
  temperatureAndCity.attr("class", "displayTemp");
  let arr = [];
  for (let i = 0; i < response.weather.length; i++) {
    arr.push(response.weather[i].icon);
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

function signInExistingUser() {}

function signUpNewUser() {}

function continueAsGuest() {}

function logout() {}

//using yelp places api

// var settings = {
//   async: true,
//   crossDomain: true,
//   url:
//     "https://api.yelp.com/v3/businesses/search?text=coffee&latitude=37.786882&longitude=-122.399972",
//   method: "GET",
//   headers: {
//     Authorization:
//       "Bearer " +
//       "RNPYUywdhji7tjfiGm8Nnm1WTnygxsgP-gwpmQhU8z0ljE3VJ7U0FBQr9Xc9aXSiEGEv4GGfgztkei29cQqxZZ92ToYR6PTCUhRRCh9ZsT0vt-Vf93qIwNpUXft-XHYx"
//   }
// };

// $.ajax(settings).done(function(response) {
//   console.log(response);
// });

$("#uptown").on("click", function() {
  $(".btn").show();
  $("#uptown").hide();
});

// var myurl =
// "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=midtown-nyc";

// $.ajax({
// url: myurl,
// headers: {
//   Authorization:
//     "Bearer RNPYUywdhji7tjfiGm8Nnm1WTnygxsgP-gwpmQhU8z0ljE3VJ7U0FBQr9Xc9aXSiEGEv4GGfgztkei29cQqxZZ92ToYR6PTCUhRRCh9ZsT0vt-Vf93qIwNpUXft-XHYx"
// },
// method: "GET",
// dataType: "json",
// success: function(data) {
//   console.log(data.businesses);
//   $(".results").empty();
//   for (var i = 0; i < 12; i++) {
//     var imgDiv = $("<div>");
//     imgDiv.addClass("images");
//     var img = $("<img>");
//     img.attr("src", data.businesses[i].image_url);
//     img.attr("alt", "food places");
//     img.css("width", "200px");
//     img.css("height", "200px");
//     img.css("padding", "10px");
//     imgDiv.append(img);
//     imgDiv.append("<br>");
//     imgDiv.append(data.businesses[i].name);
//     $(".results").append(imgDiv);
//   }
// }
// });

let granimInstance = new Granim({
  element: "#canvas-image-blending",
  direction: "top-bottom",
  isPausedWhenNotInView: true,
  image: {
    source: "./assets/images/header_top.jpg",
    position: ["center", "top"],
    stretchMode: ["stretch-if-bigger", "stretch-if-bigger"],
    blendingMode: "multiply"
  },
  states: {
    "default-state": {
      gradients: [
        ["#29323c", "#485563"],
        ["#FF6B6B", "#556270"],
        ["#c9eafb", "#7ea0c4"],
        ["#f0ab51", "#eceba3"]
      ],
      transitionSpeed: 10000
    }
  }
});
granimInstance.play();
