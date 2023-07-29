import React, { useEffect, useState } from "react";
import "../css/newpost.css";

const NewPost = (props) => {
    const [post, setPost] = useState({
        userId: 100,
        id: '',
        title: '',
        body: '',
    });

    const [error, setError] = useState(null);

    const sendData = (e) => {
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .then(post => {
            setPost(post);
        })
        .catch(error => {
            console.error("Error sending data :", error);
            setError(error);
        })
    }

    const handleChange = (event) => {
        setPost({
            ...post, 
            [event.target.name]: [event.target.value]
        })
    }
    
    if(error) return "Error...!";

    return(
        <div className="FormWrapper">
            <form onSubmit={sendData}>
                <textarea 
                    required
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Post title"
                    value={post.title}
                    onChange={handleChange}
                />
                <textarea
                    required
                    type="text"
                    name="body"
                    id="body"
                    placeholder="Post Body"
                    value={post.body}
                    maxLength="1000"
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default NewPost;