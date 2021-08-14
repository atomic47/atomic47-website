import React from "react";
import {Link} from 'react-router-dom';

const BlogPage = (props: any) => {
  return (
    <div blog-container>
      <div className="blog-title-container">
        <h1>Atomic Blog</h1>
      </div>
      <div className="blog-items">
          {
              props.blogItems.map(({title, body, postImage, postDate}: {title: string, body: string, postImage: string, postDate: string, postId: string})=>(
                  <Link to={`/blog/`}>
                    <div className="blog-item-box">
                        <img src={postImage}>
                        </img>
                        <h3 >{postDate}</h3>
                        <h1>{title}</h1>
                        <h2>{body}</h2>
                    </div>
                  </Link>
              ))
          }
      </div>
      <div className="blog-nav">

          <a href="/">
              <h2>Back to Home</h2>
          </a>
      </div>
    </div>
  );
};

export default BlogPage;
