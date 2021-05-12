
import React,{useEffect, useState} from 'react';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Page2 from '../../Page2'
import Page3 from '../../Page3'
import pagetest from '../../Hero'
import Hero from '../../Hero';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage';
import ForgetPassword from '../ForgetPassword'
import '../../App.css'; 

  /////PAGE2//////////
  const App =()=> {
    





    return(
      <Router>
            <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/Welcome" component={Welcome} />
          <Route path="/Signup" component={Signup}/>
          <Route path="/forgetpassword" component={ForgetPassword}/>
          
          <Route component={ErrorPage} />
          
        </Switch>
          
           
        
    
    </Router>
      )
      
      }
export default App;