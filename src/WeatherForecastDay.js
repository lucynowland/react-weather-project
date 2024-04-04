import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function forecastDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let date = new Date(props.dayForecast.dt * 1000);
    let day = date.getDay();

    return days[day];
  }

  function minTemperature() {
    let minTemperature = Math.round(props.dayForecast.temp.min);
    return `${minTemperature}°`;
  }

  function maxTemperature() {
    let maxTemperature = Math.round(props.dayForecast.temp.max);
    return `${maxTemperature}°`;
  }

  return (
    <div className="col">
      <div className="ForecastDay">{forecastDay()}</div>
      <WeatherIcon code={props.dayForecast.weather[0].icon} size={38} />
      <div className="ForecastTemps">
        <span className="ForecastTemps-min">{minTemperature()}</span>
        <span className="ForecastTemps-max">{maxTemperature()}</span>
      </div>
    </div>
  );
}
