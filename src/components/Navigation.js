import React from "react";
import { Link } from "react-router-dom";
import "../css/navigation.css";

const Navigation = () => {
    return(
        <nav className="NavBar">
            <ul className="NavList">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/newpost"}>New Post</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;

