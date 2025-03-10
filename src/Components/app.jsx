import React from 'react'

import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Service from './Service'
import Contact from './Contact'
import { Route, Switch, Redirect } from 'react-router-dom'


const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to='/'/>
            </Switch>
        </>
    )
}



export default App;