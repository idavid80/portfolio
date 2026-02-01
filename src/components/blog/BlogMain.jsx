import React from "react";
import BlogSidebar from "./BlogSidebar";
import "./styles/BlogMain.css";
import Blog from "../../pages/Blog";

export default function BlogMain() {

  return (
    <div className="blogpage-container">
      <div className="blogpost-layout">
        <main className="blog-main-content">
          <Blog />
        </main>

        <BlogSidebar />
      </div>
    </div>
  );
}
