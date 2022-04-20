import React from "react";
import { useEffect } from "react";
import TopSection from "./TopSection";
import MainSection from "./MainSection";
import fetch from "./fetch";

export default function App() {
  useEffect(() => {
    // code to run after render goes here

    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let today = new Date();
    let currentDay = week[today.getDay()];
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    let day1Day = week[today.getDay() + 1];
    let day2Day = week[today.getDay() + 2];
    let day3Day = week[today.getDay() + 3];

    today = mm + "/" + dd + "/" + yyyy;

    let linkVal;

    const backgroundObj = {
      "01d":
        "https://img.wattpad.com/dd954c704a777dc1a1f2a948085b7fd888cdd621/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4d624d55756f67683832624236673d3d2d3739393338303530302e313564316461663930616162633064393139393835343639333537372e676966",
      "01n": "https://thumbs.gfycat.com/ContentJitteryCats-size_restricted.gif",
      "02d":
        "https://bestanimations.com/media/sky/1132213612blue-sky-clouds-gif.gif",
      "02n": "https://thumbs.gfycat.com/ContentJitteryCats-size_restricted.gif",
      "03d":
        "https://bestanimations.com/media/sky/1132213612blue-sky-clouds-gif.gif",
      "03n": "https://c.tenor.com/KoVjgtcsGX4AAAAM/aesthetic-night.gif",
      "04d":
        "https://bestanimations.com/media/sky/1132213612blue-sky-clouds-gif.gif",
      "04n": "https://c.tenor.com/KoVjgtcsGX4AAAAM/aesthetic-night.gif",
      "09d":
        "https://static.wixstatic.com/media/5acbb4_68aecc720ed54b5a89edf655cb6f9f6e~mv2.gif",
      "09n":
        "https://thumbs.gfycat.com/AcceptableThornyHorseshoebat-size_restricted.gif",
      "10d":
        "https://static.wixstatic.com/media/5acbb4_68aecc720ed54b5a89edf655cb6f9f6e~mv2.gif",
      "10n":
        "https://thumbs.gfycat.com/AcceptableThornyHorseshoebat-size_restricted.gif",
      "11d":
        "https://media4.giphy.com/media/DX1vOC6sDgBuU/giphy.gif?cid=ecf05e47o2nnuc4u4pt8ug96ko19g6ek4897mdvg1vfzgmz6&rid=giphy.gif&ct=g",
      "11n":
        "https://thumbs.gfycat.com/AcceptableThornyHorseshoebat-size_restricted.gif",
      "13d":
        "https://i.pinimg.com/originals/3e/1e/11/3e1e11759b1d85c2457103472584a4d2.gif",
      "13n":
        "https://i.pinimg.com/originals/3e/1e/11/3e1e11759b1d85c2457103472584a4d2.gif",
      "50d":
        "http://68.media.tumblr.com/55ab69e8654f7b40c0f6855c8ca22961/tumblr_omjk2lVUt31tliyzbo1_540.gif",
      "50n":
        "http://68.media.tumblr.com/55ab69e8654f7b40c0f6855c8ca22961/tumblr_omjk2lVUt31tliyzbo1_540.gif",
    };
    const searchBtn = document.querySelector('#searchBtn')
    searchBtn.addEventListener("click", function () {
      let data = fetch('imperial');
      console.log(data)
      return data
    });
  }, []);


  return (
    <div>
      <TopSection />
      <MainSection />
    </div>
  );
}
