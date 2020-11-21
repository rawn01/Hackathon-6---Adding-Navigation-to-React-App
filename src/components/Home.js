import React, { useEffect, useState } from "react";
import {BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';

const Home = () => {
    const [loc, setLoc] = useState();
    const location = useLocation();

    useEffect(() => {
        setLoc(location.pathname);
    }, []);

    return (
        <div>
            You are home
           <p data-testid="location-display"> {loc}</p>
        </div>
    );
};

export default Home;