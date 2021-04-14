import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect 
} from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import ShadowScreen from '../components/ShadowScreen'


const AppRoutes = () => {

    
    return (
        <>
            <Router>
                <NavBar />
                <div>
                    {/* <ScrollToTop /> */}
                    <Switch>
                        <Route exact path="/ShadowMaker" component={ ShadowScreen }/>
                        
                        <Redirect to="/ShadowMaker"/>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default AppRoutes
