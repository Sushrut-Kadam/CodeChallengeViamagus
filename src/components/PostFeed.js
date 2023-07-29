import React from "react";
import "../css/postfeed.css"
import {Post} from "./Post";
import { Link } from "react-router-dom";

const PostFeed = ({posts}) => {
    return(
        <div>
            {posts.map(post => (
                <div className="PostWrapper" key={post.id}> 
                    <Post post={post}/>
                    <Link to={`post/${post.id}`}>View Post</Link>
                </div>
            ))}
        </div>
    );
}

export default PostFeed;