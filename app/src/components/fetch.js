import React from "react";

export default function fetch(units) {
    let linkVal = ''
  let cityVal = 'Charlotte'
  if (cityVal === "") {
    linkVal = `q=Charlotte,us`;
  } else if (parseInt(cityVal) === Number) {
    linkVal = `zip=${cityVal},us`;
  } else {
    linkVal = `q=${cityVal},us`;
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?${linkVal}&units=${units}&appid=c459dafd68fb96e886da90dd07f0e224`
  )
    .then((response) => response.json())
    .then((json) => {
      let lat = json.coord.lat;
      let lon = json.coord.lon;
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=dba94717f4d86654f333b634ebb619f4`
      )
        .then((response) => response.json())
        .then((futJson) => {
          console.log(futJson);
          return futJson;
        });
    });
}
