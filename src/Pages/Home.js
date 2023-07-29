import React, { useEffect, useState } from "react";
import PostFeed from "../components/PostFeed";

const Home = () => {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
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
        fetchData();
    }, []);

    if(error) return "Error...!";

    if(loading) return "Loading...";

    return(
        <>
            <PostFeed posts={postData} />
        </>
    );
}

export default Home;