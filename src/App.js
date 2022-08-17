import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Home />
            <Footer/>
        </Router>
    );
};

export default App;
