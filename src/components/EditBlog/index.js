import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import Cookies from "js-cookie";
import './index.css';

const EditBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:3000/blogs/posts/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('token')}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setTitle(data.title || '');
                    setContent(data.content || '');
                } else {
                    console.error("Error fetching blog:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        fetchBlog();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            title: title.trim(),
            content: content.trim(),
        };

        try {
            const response = await fetch(`http://localhost:3000/blogs/posts/${id}`, {
                method: 'PUT',
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
            console.error("Error updating blog:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <>
            <Header />
            <div className="form-container">
                <h2>Edit Blog</h2>
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
                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    );
};

export default EditBlog;
