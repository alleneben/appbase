import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AddMember } from '../pages'


const MainRoutes = () => {


    return(
        <Switch>
            <Route exact path="/" component={AddMember} />
            <Route
                render={function () {
                    return <h5>Page Not Found. It is under fast development</h5>;
                }}
            />
        </Switch> 
    )
}

export default MainRoutes;