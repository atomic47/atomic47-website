import React, { useEffect } from "react";
import {Link} from 'react-router-dom';

const BlogPage = (props: any) => {
  useEffect(()=>{
    document.getElementById('blog-link')?.classList.add('active')
  }, [])
  // let scrollpos = window.scrollY;
  // window.addEventListener('scroll', function(){ 
  //     let activeLinks = document.getElementsByClassName('active');
  //     Array.from(activeLinks).forEach(el=>(
  //       el.classList.remove('active')
  //     ))
  //     document.getElementById('blog-link')?.classList.add('active')
  // })
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
                        <img src={postImage} alt={title}>
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
        {props.blogItems.length > 10&&
        <a>next page</a>}
      </div>
    </div>
  );
};

export default BlogPage;
