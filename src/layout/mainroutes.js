import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AddMember, Dashboard, SearchPage } from '../pages'


const MainRoutes = () => {


    return(
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/member" component={AddMember} />
            <Route exact path="/searchpage" component={SearchPage} />
            <Route
                render={function () {
                    return <h5>Page Not Found. It is under fast development</h5>;
                }}
            />
        </Switch> 
    )
}

export default MainRoutes;