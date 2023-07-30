import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Post = ({post, showId}) => {
    return(
        <article className="post">
            <div className="metadata">
                <div className="metainfo">
                    {showId && <h1>{post.id}. </h1>}
                    <h1>{post.title}</h1><br/>
                </div>
            </div>
            <ReactMarkdown className="postbody">{post.body}</ReactMarkdown>
        </article>
    );
}

export { Post };
