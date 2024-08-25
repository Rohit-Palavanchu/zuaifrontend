import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Cookies from "js-cookie";
import './index.css';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    if(!Cookies.get('token')){
        navigate('/login', {replace:true})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = {
            title: title.trim(),
            content: content.trim(),
        };
    
        try {
            const response = await fetch('https://zuaibackend-vtsf.onrender.com/blogs/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('token')}`,
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                setTitle('');
                setContent('');
                navigate('/');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error creating blog:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    };
    
    return (
        <>
            <Header />
            <div className="form-container">
                <h2>Create Blog</h2>
                <form onSubmit={handleSubmit} className="create-blog-form">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter blog title"
                        required
                    />
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter blog content"
                        rows="5"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default CreateBlog;
