import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import Home from './pages/home'
import CreateAd from './pages/create';
import Details from './pages/ad-details';


const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/create' component={CreateAd} />
                <Route path='/ads/:id' component={Details} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation