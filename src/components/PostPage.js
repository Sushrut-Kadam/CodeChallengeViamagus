import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { Post } from "./Post";
import "../css/postpage.css"


const PostPage = () => {
    const {id} = useParams();
    const [postData, setPostData] = useState({}); 
    const [error, setError]  = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
            console.error("Error fetching Post details:", error);
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

    if(loading) return <LoadingSpinner />;

    return(
        <div className="postView">
            <Post post={postData} showId={false}/>
        </div>
    );
}

export { PostPage };