import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import NewPost from "./components/NewPost";
import {PostPage} from "./components/PostPage";


const App = () => {
  return(
    <>
      <Router>
          <Layout>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/newpost" element={<NewPost />} />
                  <Route path="/post/:id" element={<PostPage />} />
              </Routes>
          </Layout>
      </Router>
    </>
  );
}

export default App;