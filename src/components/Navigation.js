import React from "react";
import { Link } from "react-router-dom";
import "../css/navigation.css";

const Navigation = () => {
    return(
        <nav className="navBar">
            <ul className="navList">
                <li>
                    <Link to={"/"} style={{textDecoration: 'none'}} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/newpost"} style={{textDecoration: 'none'}} >
                        New Post
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;

