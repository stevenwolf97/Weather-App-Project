import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';


function App() {
    return (
        <div className="App">
            <Weather />
        </div>
    )
}

export default App;