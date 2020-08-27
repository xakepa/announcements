import React, { useContext } from 'react';
import {
    BrowserRouter,
    Switch,
    Route, Redirect
} from 'react-router-dom';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import Home from './pages/home'
import CreateAd from './pages/create';
import Details from './pages/ad-details';
import MyAds from './pages/my-ads';
import UserContext from './Context'


const Navigation = () => {
    const context = useContext(UserContext)
    const isLoggedIn = context.user && context.user.loggedIn

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/register'>
                    {isLoggedIn ? (<Redirect to="/" />) : (<RegisterPage />)}
                </Route>
                <Route path='/login' component={LoginPage} />
                <Route path='/create'>
                    {isLoggedIn ? (<CreateAd />) : (<Redirect to="/login" />)}

                </Route>
                <Route path='/ads/:id' component={Details} />
                <Route path='/myads' component={MyAds} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation