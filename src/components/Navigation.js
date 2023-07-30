import React from "react";
import { Link } from "react-router-dom";
import "../css/navigation.css";

const Navigation = ({showNavBar}) => {
    return(
        <nav className="navBar" id={showNavBar?"hidden":""}>
            <div className="navList"> 
                <ul>
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
            </div>
        </nav>
    );
}

export default Navigation;

