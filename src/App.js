import React, { Component } from 'react';
import './App.css';
import 'react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';

const API_key="63365ebc1bf5b5e1b22b014e9bc83f21"

class App extends React.Component{
    constructor(){
        super();
        this.state={
            city: undefined,
            country: undefined,
            icon: undefined,
            main: undefined,
            celsius: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: "",
            error: false
        };
        this.getWeather();
    }

//**left off at 24.02 on video  */
calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
}

    getWeather=async () =>{
        const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);

        const response = await api_call.json();

        console.log(response);

        this.setState({
            city: response.name,
            country: response.country,
            celsius: this.calCelsius(response.main.temp),
            temp_max: this.calCelsius(response.main.temp_max),
            temp_min: this.calCelsius(response.main.temp_min),
            description: response.weather[0].description
        });
    };

    render(){
        return(
        <div className="App">
            <Weather
            city={this.state.city}
            country={this.state.country}
            temp_celsius={this.state.celsius}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            description={this.state.description} />
        </div>
        );
    };
}

export default App;