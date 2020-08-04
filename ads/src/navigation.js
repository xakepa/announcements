import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import PageWrapper from './components/page-wrapper';





const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={PageWrapper} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/login' component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation