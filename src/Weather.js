import React from "react";
import "./Weather.css";
import Sunny from "./images/sunny-icon.png";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            {" "}
            <input
              type="search"
              placeholder="Enter a City..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-style w-100"
            />
          </div>
        </div>
      </form>
      <h1>Charleston</h1>
      <ul>
        <li>Wednesday 11:30</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-1">
        <div className="col-6">
          <img src={Sunny} alt="Sunny" className="float-left" />
          <span className="temperature">25</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 43%</li>
            <li>Wind: 12km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
