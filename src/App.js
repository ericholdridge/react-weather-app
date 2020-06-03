import React, { Component } from "react";
import "./App.css";
import WeatherForm from "./components/WeatherForm/WeatherForm";

class App extends Component {
  state = {
    inputValue: ''
  }

  handleInputValue = (event) => {
    this.setState({
      inputValue:  event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const api = "f8e49cf4d3f9f0f64ec9a72b10c19e81";
    const city = this.state.inputValue;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
          <form onSubmit={this.handleFormSubmit}>
            <input onChange={this.handleInputValue} value={this.state.inputValue}/>
          </form>
      </div>
    );
  }
}

export default App;
