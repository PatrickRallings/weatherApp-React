import React from "react";

export default function TopSection() {

  
  return (
    <div className="col" id="appTop">
      <div className="alignLeft">
        <input
          style={{ height: "30px", margin: "10px 30px" }}
          type="input"
          placeholder="Enter zipcode or city name"
        />
        <button id="searchBtn">Search</button>
      </div>
    </div>
  );
}
