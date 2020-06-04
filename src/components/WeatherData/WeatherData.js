import React from "react";
import Container from "../Container/Container";

const WeatherData = ({ data }) => {
  return (
    <Container> 
      {data && (
        <div className="weatherData">
          <p>City: {data.name}</p>
          <p>Temperature: {data.main.temp * 1.8 + 32}</p>
          <p>Description: {data.weather[0].description}</p>
          <p>Humidty: {data.main.humidity * 1.8 + 32}</p>
          <p>Wind: {data.wind.speed + ' mph'}</p>

        </div>
      )}
    </Container>
  );
};

export default WeatherData;
