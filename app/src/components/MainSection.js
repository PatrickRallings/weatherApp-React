import React from "react";

export default function MainSection() {
  return (
    <div className="crd col" id="appBottom">
      <div id="appHead">
        <div className="col" id="dateDiv">
          <span
            className="row"
            id="day"
            style={{ fontSize: "small", marginLeft: "3px" }}
          >
            day
          </span>
          <span
            className="row"
            id="date"
            style={{ fontSize: "small", marginLeft: "3px" }}
          />
        </div>
        <div className="col">
          <span id="location" style={{ fontSize: "40px" }}>
            Charlotte, NC
          </span>
        </div>
        <div
          className="col row"
          style={{
            justifyContent: "end",
            paddingRight: "15px",
            alignItems: "center",
          }}
        >
          <button id="fBtn">℉</button>
          <button id="cBtn">℃</button>
        </div>
      </div>
      <div className="row tempCont">
        <div className="infoCont col tempNumCont">

            <h4>Currently</h4>
            <hr />
            <h2 style={{ fontSize: "50px", marginTop: "7px" }} id="currentTemp">
              70 °
            </h2>
        </div>
        <div className="infoCont col tempNumCont">
          <span className="col">
            <div className="row">
              <h4 className="col">High</h4>
              <h4 className="col">Low</h4>
              <hr />
            </div>
          </span>
          <span className="col" id="tempActual">
            <div className="row">
              <h3 id="currentHigh" className="col">
                70 °
              </h3>
              <h3 id="currentLow" className="col">
                70 °
              </h3>
            </div>
          </span>
        </div>
      </div>
      <div className="row tempExtraCont">
        <div className="infoCont col-4 tempExtraNumCont">
          <span className="col" style={{ marginTop: "5px" }}>
            <h5 className>Condition</h5>
            <hr />
          </span>
          <span className="col" id="tempActual">
            <img
              id="condition"
              src="https://openweathermap.org/img/wn/10d.png"
              alt=""
            />
          </span>
          <p
            id="currentConditionText"
            style={{ fontSize: "small", wordWrap: "normal" }}
          >
            <em />
          </p>
        </div>
        <div className="infoCont col-4 tempExtraNumCont">
          <span className="col" style={{ marginTop: "5px" }}>
            <h5>Humidity</h5>
            <hr />
          </span>
          <span className="col" id="tempActual">
            <h2 id="humidity">10%</h2>
          </span>
        </div>
        <div className="infoCont col-4 tempExtraNumCont">
          <span className="col" style={{ marginTop: "5px" }}>
            <h5>Feels Like</h5>
            <hr />
          </span>
          <span className="col" id="tempActual">
            <h2 id="feelsLike">70 °</h2>
          </span>
        </div>
      </div>
      <div
        id="appHead"
        style={{
          borderTop: "2px solid black",
          marginTop: "10px",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "30px" }}>Three Day Forecast</span>
      </div>
      <div className="row tempExtraCont">
        <div className="infoCont col-4 tempExtraNumCont">
          <span className="col" style={{ marginTop: "5px" }}>
            <h5 id="day1Date">Day 1</h5>
            <hr />
          </span>
          <span className="col" id="tempActual">
            <p
              id="day1Range"
              className="col"
              style={{ margin: "5px", fontSize: "larger" }}
            >
              Hi/Low°: 70 / 55
            </p>
            <img
              id="day1Condition"
              src="https://openweathermap.org/img/wn/10d.png"
              alt=""
            />
          </span>
          <p
            id="day1ConditionText"
            style={{ fontSize: "small", wordWrap: "normal" }}
          >
            <em />
          </p>
        </div>
        <div className="infoCont col-4 tempExtraNumCont">
          <span className="col" style={{ marginTop: "5px" }}>
            <h5 id="day2Date">Day 2</h5>
            <hr />
          </span>
          <span className="col" id="tempActual">
            <p
              id="day2Range"
              className="col"
              style={{ margin: "5px", fontSize: "larger" }}
            >
              Hi/Low°: 70 / 55
            </p>
            <img
              id="day2Condition"
              src="https://openweathermap.org/img/wn/10d.png"
              alt=""
            />
          </span>
          <p
            id="day2ConditionText"
            style={{ fontSize: "small", wordWrap: "normal" }}
          >
            <em />
          </p>
        </div>
        <div className="infoCont col-4 tempExtraNumCont">
          <span className="col" style={{ marginTop: "5px" }}>
            <h5 id="day3Date">Day 3</h5>
            <hr />
          </span>
          <span className="col" id="tempActual">
            <p
              id="day3Range"
              className="col"
              style={{ margin: "5px", fontSize: "larger" }}
            >
              Hi/Low°: 70 / 55
            </p>
            <img
              id="day3Condition"
              src="https://openweathermap.org/img/wn/10d.png"
              alt=""
            />
            <p
              id="day3ConditionText"
              style={{ fontSize: "small", wordWrap: "normal" }}
            >
              <em />
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
