import React, { useEffect, useState } from "react";
import {BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';

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

export default LocationDisplay;