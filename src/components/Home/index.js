import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Header from "../Header";
import './index.css';
import Cookies from 'js-cookie';

const Card = (props) => {
    const { value, clickBlog, onDelete } = props;

    const onClickBlog = () => {
        clickBlog(value.id);
    };

    return (
        <div className="card-container">
            <h6 className="title">{value.title}</h6>
            <div className="card-content">
                <span onClick={onClickBlog} className="read-more">Read More...</span>
                <button onClick={() => onDelete(value.id)} className="delete-button">
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
};

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();

    const onCreateBlog = () => {
        navigate('/create-blog');
    };

    const getAllBlogs = async () => {
        const response = await fetch('http://localhost:3000/blogs/posts', {
            method: 'GET',
        });
        const data = await response.json();
        setBlogs(data);
    };

    const clickBlog = (id) => {
        navigate(`/post/${id}`);
    };

    const handleDelete = async (id) => {
        const token = Cookies.get('token');
        const response = await fetch(`http://localhost:3000/blogs/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            setBlogs(blogs.filter(blog => blog.id !== id));
        } else {
            setNotification('Not authorized');
            setTimeout(() => setNotification(''), 5000);
        }
    };

    useEffect(() => {
        getAllBlogs();
    }, []);

    return (
        <>
            <Header />
            {notification && <div className="notification">{notification}</div>}
            <div className="create-blog-btn-container">
                <button onClick={onCreateBlog} className="create-blog-btn">Create Blog+</button>
            </div>
            <div className="blog-container">
                {blogs.map(blog => (
                    <Card key={blog.id} value={blog} clickBlog={clickBlog} onDelete={handleDelete} />
                ))}
            </div>
        </>
    );
};

export default Home;
