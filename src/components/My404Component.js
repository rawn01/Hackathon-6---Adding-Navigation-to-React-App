import React, {useState, useEffect} from "react";
import {BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';
import LocationDisplay from "./LocationDisplay";

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

export default My404Component;