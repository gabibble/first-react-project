import React from "react";
import axios from "axios";

export default function Weather() {
  function displayWeather(response) {
    alert(`The weather in New York is ${response.data.main.temp}`);
    console.log(response.data.main.temp);
    console.log(url);
  }
  let apiKey = "4b4875a4aa1ad99ee265ed1dc59a8d80";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=new york&units=imperial&appid=${apiKey}`;

  axios.get(url).then(displayWeather);

  return <h2>Hello Weather</h2>;
}
