import React from "react";

export default function MainSectionOne() {
  return (
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
  );
}
