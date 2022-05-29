import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'
const Blog = ({ blog }) => {

       const truncatString = (str, num) => {
             if(str.length > num){
                 return str.slice(0, num) + '...'
             }else{
                 return str
             }
       }

       
    return (
        <div className='blog'>
            <h4>{blog.title}</h4>
            <small>22/02/2022</small>
            
             <Link to={`/blog/${blog.id}`}><p>{truncatString(blog.body, 100)}</p></Link>
            <img style={{ width: "100%" }} src={blog.img} alt="" />
        </div>
    );
};

export default Blog;