import React, { useState } from "react";
import "../css/postfeed.css"
import {Post} from "./Post";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PostFeed = ({posts}) => {
    const [pageNumber, setPageNumber] = useState(0);

    const postsPerPage = 10;
    const pagesVisited = pageNumber*postsPerPage;
    const pageCount = Math.ceil(posts.length/postsPerPage);

    const displayPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map(post => (
        <div className="PostWrapper" key={post.id}> 
            <Post post={post}/>
            <Link to={`post/${post.id}`}>View Post</Link>
        </div>
    ))

    const handlePageChange = ({selected}) => {
        setPageNumber(selected);
    }

    return(
        <div>
            {displayPosts}
            <ReactPaginate
                previousLabel="prev"
                nextLabel="next"
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName="paginationButtons"
                activeClassName="paginationActive"
            />
        </div>
    );
}

export default PostFeed;