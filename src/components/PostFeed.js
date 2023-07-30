import React from "react";
import {Post} from "./Post";
import { Link } from "react-router-dom";
import "../css/postfeed.css"

const PostFeed = ({posts}) => {
    return(
        <div>
            <div className="blogs-section">
                {posts.map(post => (
                    <div className="postWrapper" key={post.id}> 
                        <Post post={post}/>
                        <Link to={`post/${post.id}`} style={{textDecoration: 'none'}}>
                            <button className="btn dark">Read</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostFeed;