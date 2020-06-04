import React, { Component } from "react";
import "./App.css";
import WeatherForm from "./components/WeatherForm/WeatherForm";
import WeatherData from "./components/WeatherData/WeatherData";

class App extends Component {
  // const [inputValue, setInputValue] = useState('');
  // const [data, setData] = useState('');

  state = {
    inputValue: "",
    getData: "",
  }

  // handleInput = e =>{
  //   setInputValue(e.target.value);
  // }

  handleInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  // <input value={inputValue} onChange={e => setInputValue(e.target.value)} />

  handleFormSubmit = (event) => {
    event.preventDefault();
    const api = "f8e49cf4d3f9f0f64ec9a72b10c19e81";
    const city = this.state.inputValue;
    // const city = inputValue;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    if (this.state.inputValue.trim() !== "") {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // if(data.cod !== '404'){
          //   console.log('wrong name')
          // }
          // setData(data)
          this.setState({
            getData: data,
          });
          console.log(data)
        })
        .catch((error) => console.log(error));
    } else {
      console.log("wrong");
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React Weather App</h1>
        <WeatherForm
          handleSubmit={this.handleFormSubmit}
          handleInput={this.handleInputValue}
          value={this.state.handleInputValue}
          data={this.state.getData}
        />
        <WeatherData data={this.state.getData} />
      </div>
    );
  }
}

export default App;
