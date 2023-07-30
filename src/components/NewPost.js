import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/newpost.css";
import "../css/index.css";

const NewPost = (props) => {
    const [post, setPost] = useState({
        userId: 100,
        id: '',
        title: '',
        body: '',
    });

    const [error, setError] = useState(null);

    const navigate = useNavigate();

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
        .finally(() => {
            alert("Form submitted successfully"); 
            navigate('/');
        });
    }

    const handleChange = (event) => {
        setPost({
            ...post, 
            [event.target.name]: [event.target.value]
        })
    }
    
    if(error) return "Error...!";

    return(
        <div>
            <h2 className="heading">Create a new post</h2>
            <div className="formWrapper">
                <form onSubmit={sendData}>
                    <textarea 
                        required
                        type="text"
                        name="title"
                        className="title"
                        placeholder="Post title"
                        value={post.title}
                        onChange={handleChange}
                    />
                    <textarea
                        required
                        type="text"
                        name="body"
                        className="body"
                        placeholder="Post Body"
                        value={post.body}
                        maxLength="1000"
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn dark">Save</button>
                </form>
            </div>
        </div>
    );
}

export default NewPost;