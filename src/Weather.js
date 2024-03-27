import React from "react";
import "./Weather.css";

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
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-danger"
            />
          </div>
        </div>
      </form>
      <h1>Charleston</h1>
      <ul>
        <li>Wednesday 11:30</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://as1.ftcdn.net/v2/jpg/00/55/12/64/1000_F_55126421_UkxlTpL0Ost5O0UG1uYfPSY67yXvlpb6.jpg"
            alt="Sunny"
            width={80}
          />
          25°C
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
