import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import RegisterPage from './pages/register';



const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/register' component={RegisterPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation