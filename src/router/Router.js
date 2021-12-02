import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../home/Home';
const Links = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home}></Route>
            </Switch>
        </Router>
    );
};


export default Links;