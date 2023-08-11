export default function Card({ weather, city }) {
  var temps = [];
  function getFiveTemps() {
    for (let i = 0; i < 5; i++) {
      temps.push(weather.weather.temperature[i]);
    }
  }
  console.log(temps);
  return (
    <div className="card">
      <div className="card-heading">
        <div className="city">{city.name},</div>
        <div className="weather">Sunny</div>
      </div>
      <div className="card-content">
        <img src="../public/part-cloudy-2.png" width="265px" />
        <div className="data">
          {temps.map((temp) => {
            console.log(temp);
            return <div key={crypto.randomUUID()}>{temp}</div>;
          })}
          <div className="time">2:00AM</div>
          <div className="temp">29°C</div>
        </div>
      </div>
      <button onClick={getFiveTemps}>Get</button>
    </div>
  );
}
