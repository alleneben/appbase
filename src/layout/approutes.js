import React from 'react';
import { Switch, Route } from "react-router-dom";
import MainLayout from './mainlayout';


const AppRoutes = () => {

    return (
        <Switch>
            <Route exact path="/" component={ MainLayout } />
            <Route exact path="/member" component={ MainLayout } />
            <Route
                render={function () {
                    return <h5>Page Not Found. It is under fast development</h5>;
                }}
            />
        </Switch>
    )
}

export default AppRoutes;