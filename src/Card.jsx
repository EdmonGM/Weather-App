import { useState } from "react";

export default function Card({ weather, city }) {
  var time = {
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
  };
  const [temps, setTemps] = useState([]);
  function getFiveTemps() {
    console.log(temps);
    for (let i = time.hour - 2; i < time.hour + 2; i++) {
      setTemps((current) => [...current, weather.weather.temperature[i]]);
    }
  }
  return (
    <div className="card">
      <div className="card-heading">
        <div className="city">{city.name},</div>
        <div className="weather">Sunny</div>
      </div>
      <div className="card-content">
        <img src="../public/part-cloudy-2.png" width="265px" />
        <div className="data">
          <div className="time">
            {time.hour}:{time.minutes < 10 ? `0${time.minutes}` : time.minutes}
          </div>
          <div className="temp">{temps[0]}°C</div>
        </div>
      </div>
      <button onClick={getFiveTemps}>Get</button>
    </div>
  );
}
