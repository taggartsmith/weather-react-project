import React, { useState } from 'react';
import DateTime from './datetime';
import background from '../../static/assets/images/DJI_0388.jpg';


const api = {
  key: "5e04edd6a745edeef639f11e05ac5a7f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Weathercall() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  return (
    <div 
        className="img"
        style={{
        backgroundImage: `url(${background})`
      }}>

      <div className='page-content'>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className='items-returned'>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°F
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </div>
    </div>
  );
}

export default Weathercall;
