import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Post = ({post}) => {
    return(
        <article className="post">
            <div className="metadata">
                <div className="metainfo">
                    <h1>{post.id}. {post.title}</h1><br/>
                </div>
            </div>
            <ReactMarkdown className="postbody">{post.body}</ReactMarkdown>
        </article>
    );
}

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
            console.log(data)
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
        <Post post={postData}/>
    );
}

export { Post, PostPage };
