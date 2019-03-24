import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
//import Login from './components/Login.js'
//import ExternalLogin from './components/ExternalLogin.js'
//import InternalLogin from './components/InternalLogin.js'
//import Home from './Home.js'
//import About from './About.js'

// <Scene key = "home" component = {Home} title = "Daimlur"   />
//         <Scene key = "about" component = {About} title = "Daimlur" />
//         <Scene key = "externallogin" component = {ExternalLogin} title = "Exter" />
//         <Scene key = "internallogin" component = {InternalLogin} title = "Inter" />

const Routes = () => (
   <Router>
    <Stack key="root">
     
         <Scene key = "login" component = {Login} title = "Daimlur" initial = {true} />
        
     
    </Stack>
   </Router>
)
export default Routes