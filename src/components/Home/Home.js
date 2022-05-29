import React, { useState } from 'react';
import './Home.css';
import { blogData } from './BlogData.js';
import Blog from '../Blog/Blog';
const Home = () => {
    const [blogs, setBlog] = useState(blogData)
    return (
        <div className='home-page'>
            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Home;