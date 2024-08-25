import React, { useState, useEffect } from "react";
import Header from "../Header";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    if(!Cookies.get('token')){
        navigate('/login', {replace:true})
    }

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://zuaibackend-vtsf.onrender.com/blogs/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleEdit = () => {
        navigate(`/edit/${id}`);
    };

    return (
        <>
            <Header />
            <h6 className="back-home" onClick={() => navigate('/')}>Back To Home</h6>
            <div className="detail-card-container">
                {post ? (
                    <div className="detail-card">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <button className="edit-button" onClick={handleEdit}>Edit</button>
                    </div>
                ) : (
                    <p>Post not found</p>
                )}
            </div>
        </>
    );
};

export default PostDetail;
