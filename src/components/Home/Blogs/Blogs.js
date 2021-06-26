import React, { useEffect, useState } from 'react';
import './Blogs.css';
import card1 from '../../../Assets/slider1.jpg'
import blogData from '../../../fakeData.json'
import BlogContent from '../BlogContent/BlogContent';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogData)
    },[])
    return (
        <div className="container py-5">
            <div className="d-flex flex-wrap justify-content-between">
                {
                    blogs.map(blog => <BlogContent blog={blog}></BlogContent>)
                }
            </div>
        </div>
    );
};

export default Blogs;