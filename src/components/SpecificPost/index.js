import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import './index.css';

const Card = (props) => {
    const { value, clickBlog } = props;

    const onClickBlog = () => {
        clickBlog(value.id);
    };

    return (
        <div className="card-container">
            <h6 className="title">{value.title}</h6>
            <span onClick={onClickBlog} className="read-more">Read More...</span>
        </div>
    );
};

const SpecificPost = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    const token = Cookies.get('token');

    const onCreateBlog = ()=>{
        navigate('/create-blog')
    }

    const getAllBlogs = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3000/blogs/posts', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }

            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error(error);
        }
    }, [token]); // Add 'token' as a dependency because it's used inside the function

    const clickBlog = (id) => {
        navigate(`/post/${id}`);
    };

    useEffect(() => {
        getAllBlogs();
    }, [getAllBlogs]); // Include getAllBlogs in the dependency array

    return (
        <>
            <Header />
            <div className="create-blog-btn-container">
                <button onClick={onCreateBlog} className="create-blog-btn">Create Blog+</button>
            </div>
            <div className="blog-container" style={{ padding: '20px' }}>
                {blogs.map(i => (
                    <Card key={i.id} value={i} clickBlog={clickBlog} />
                ))}
            </div>
        </>
    );
};

export default SpecificPost;
