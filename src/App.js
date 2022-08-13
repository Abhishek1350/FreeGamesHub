import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <NavBar />
            <Home/>
        </Router>


    )
}

export default App