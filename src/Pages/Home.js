import React, { useEffect, useRef, useState } from "react";
import PostFeed from "../components/PostFeed";
import LoadingSpinner from "../components/LoadingSpinner";
import "../css/home.css";

const Home = () => {
    const [postData, setPostData] = useState([]);
    const [postNumber, setPostNumber] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const wrapperRef = useRef(null);

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

    const handleButtonClick = async (operation) => {
        if(operation === '-')
            await setPostNumber(postNumber-postsPerPage);

        if(operation === '+')
            await setPostNumber(postNumber+postsPerPage);

        wrapperRef.current.scrollIntoView({
            behaviour: "smooth", 
            inline: "start"
        });
    }

    useEffect(() => {
        fetchData(postNumber);
    }, [postNumber]);

    if(error) return "Error...!";

    if(loading) return <LoadingSpinner />;

    return(
        <div ref={wrapperRef}>
            <h1 className="heading">All Posts</h1>
            <div>
                <PostFeed posts={postData} />
                <div className="paginationButtons">
                    <button onClick={() => handleButtonClick('-')} disabled={postNumber === 0}>Prev</button>
                    <button onClick={() => handleButtonClick('+')} disabled={postNumber === 90}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Home;