import React, { useState } from "react";
import Navigation from "./Navigation";
import "../css/header.css";

const Header = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    return(
        <div>
            <header className="headerBar">
                <h1>Posts</h1>
                <a className="toggleButton" onClick={() => setShowNavBar(!showNavBar)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
            </header>
            <Navigation showNavBar={showNavBar}/>
        </div>
    );
}

export default Header;