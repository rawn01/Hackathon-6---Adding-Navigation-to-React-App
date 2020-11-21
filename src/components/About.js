import React, {useState, useEffect} from "react";
import {BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';

const About = () => {
    const [loc, setLoc] = useState();
    const location = useLocation();

    useEffect(() => {
        setLoc(location.pathname);
    }, []);

    return (
        <div>
            You are on the about page.
            <p data-testid="location-display"> {loc}</p>
        </div>
    );
};

export default About;