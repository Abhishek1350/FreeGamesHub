import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <NavBar />
        </Router>


    )
}

export default App