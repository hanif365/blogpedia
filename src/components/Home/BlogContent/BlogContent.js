import React from 'react';
import './BlogContent.css';

const BlogContent = (props) => {
    const { id, title, description, image } = props.blog;
    return (
        <div className="blog-content-container py-5">
            <div class="card blog-content-inner">
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
    );
};

export default BlogContent;