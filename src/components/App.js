import React, {Component, useState} from "react";
import {BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';
import '../styles/App.css';

import Home from './Home';
import About from './About';
import My404Component from "./My404Component";

import LocationDisplay from "./LocationDisplay";


class App extends Component {

    render() {
        return(
                <div id="main">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <BrowserRouter>

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route component={My404Component}/>
                        </Switch>
                    </BrowserRouter>


                    <LocationDisplay />
                </div>
        );
    }

}


export default App;
