import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Wed</div>
          <WeatherIcon code="11d" size={38} />
          <div className="ForecastTemps">
            <span className="ForecastTemps-min">4°</span>
            <span className="ForecastTemps-max">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
