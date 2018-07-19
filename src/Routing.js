import React, { Component}  from 'react';
import SignIn from './components/container/signIn/signIn';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/container/home/home';
import SingUp from './components/container/signUp/signUp';
import Donor from './components/container/donor/donor';
import Needer from './components/container/needer/needer';




export default class Routing extends Component {
    render(){
        return(
         <Router>
            <div>
               
                <Route exact path='/' component={SignIn}></Route>
                <Route  path='/home' component={Home}></Route>
                <Route  path='/signup' component={SingUp}></Route>
                <Route  path='/donor' component={Donor}></Route>
                <Route  path='/needer' component={Needer}></Route>
            </div>
        </Router>
        )
    }
    
}