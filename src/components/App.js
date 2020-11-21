import React, {Component, useState, useEffect} from "react";
import {BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';
import '../styles/App.css';

// import Home from './Home';
// import About from './About';
// import My404Component from "./My404Component";

// import LocationDisplay from "./LocationDisplay";

const Home = () => {
    // const [loc, setLoc] = useState();
    // const location = useLocation();

    // useEffect(() => {
    //     setLoc(location.pathname);
    // }, []);

    return (
        <div>
            You are home
           {/* <LocationDisplay /> */}
        </div>
    );
};

const About = () => {
    // const [loc, setLoc] = useState();
    // const location = useLocation();

    // useEffect(() => {
    //     setLoc(location.pathname);
    // }, []);

    return (
        <div>
            You are on the about page.
            {/* <LocationDisplay /> */}
        </div>
    );
};

const My404Component = () => {
    // const [loc, setLoc] = useState();
    // const location = useLocation();

    // useEffect(() => {
    //     setLoc(location.pathname);
    // }, []);

    return (
        <div>
            No match
            {/* <LocationDisplay /> */}
        </div>
    );
};

const LocationDisplay = () => {
    const [loc, setLoc] = useState();
    const location = useLocation();

    useEffect(() => {
        setLoc(location.pathname);
    });

    return (
        <div data-testid="location-display">
            {loc}
        </div>  
    );
}

class App extends Component {

    render() {
        return(
            <div id="main">
                <BrowserRouter>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route component={My404Component}/>
                        </Switch>

                    
                    <LocationDisplay />
                </BrowserRouter>

            </div>

        );
    }

}

export {Home, About, My404Component, LocationDisplay};

export default App;
