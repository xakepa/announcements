import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import Home from './pages/home'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/login' component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation