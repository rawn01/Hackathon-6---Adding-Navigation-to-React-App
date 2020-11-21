import React, {useState, useEffect} from "react";
import {BrowserRouter, Link, Switch, Route, useLocation} from 'react-router-dom';

const My404Component = () => {
    const [loc, setLoc] = useState();
    const location = useLocation();

    useEffect(() => {
        setLoc(location.pathname);
    }, []);

    return (
        <div>
            No match
            <p data-testid="location-display"> {loc}</p>
        </div>
    );
};

export default My404Component;