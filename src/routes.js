import React from 'react';
import {Route, Switch} from 'react-router';
import UserSearch from './containers/UserSearch';
import NavbarScreen from "./containers/Navbar";


const routes = (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <NavbarScreen/>
            <Switch>
                <Route exact path='/' component={UserSearch}/>
            </Switch>
        </div>
);

export default routes;