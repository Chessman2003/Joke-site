import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Routes 
} from "react-router-dom";

import Header from "../Header/header";

import Nav from "./Components/nav";

import SherlockJoke from "./Components/Sherlock";
import ShtirlitsJoke from "./Components/Shtirlits";
import DeveloperJoke from "./Components/Developer";
import AllJokes from "./Components/All-jokes";
import NotFound from "./Components/notfound";


const App = () => {
    return(
        <div className="app">
            <Header title={'Анекдоты'} />
            
            <Router>
                <div>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<AllJokes />} />
                        <Route path="/Shtirlits" element={<ShtirlitsJoke />} />
                        <Route path="/Sherlock" element={<SherlockJoke />} />
                        <Route path="/Developer" element={<DeveloperJoke />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;