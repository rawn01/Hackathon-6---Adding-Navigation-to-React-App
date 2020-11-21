import React, { useEffect, useState } from "react";
import {BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';
import LocationDisplay from "./LocationDisplay";

const Home = () => {
    // const [loc, setLoc] = useState();
    // const location = useLocation();

    // useEffect(() => {
    //     setLoc(location.pathname);
    // }, []);

    return (
        <div>
            You are home
           <LocationDisplay />
        </div>
    );
};

export default Home;