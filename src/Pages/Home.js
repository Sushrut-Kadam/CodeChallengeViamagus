import React, { useEffect, useState } from "react";
import PostFeed from "../components/PostFeed";

import "../css/home.css";

const Home = () => {
    const [postData, setPostData] = useState([]);
    const [postNumber, setPostNumber] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const postsPerPage = 10;
    
    const fetchData = (postNumber) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}&_start=${postNumber}`)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw response;
        })
        .then(data => {
            setPostData(data);
        })
        .catch(error => {
            console.error("Error Fetching Posts: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);  
        })
    }

    useEffect(() => {
        fetchData(postNumber);
    }, [postNumber]);

    if(error) return "Error...!";

    if(loading) return "Loading...";
    
    const handlePrevButtonClick = () => {
        console.log("button clicked");
        setPostNumber(postNumber-postsPerPage);
    }

    const handleNextButtonClick = () => {
        console.log("button clicked");
        setPostNumber(postNumber+postsPerPage);
    }

    return(
        <div className="bodyWrapper">
            <PostFeed posts={postData} />
            <div className="paginationButtons">
                <button onClick={handlePrevButtonClick} disabled={postNumber === 0}>Prev</button>
                <button onClick={handleNextButtonClick} disabled={postNumber === 90}>Next</button>
            </div>
        </div>
    );
}

export default Home;