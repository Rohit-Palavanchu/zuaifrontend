import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import './index.css';

const Header = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        Cookies.remove('token');
        navigate('/login', { replace: true });
    };

    return (
        <div className="header-container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary nav-bar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className="zuai-logo" src="https://chat.zuapp.co/_next/static/media/ZuAi%20Logo%20Navbar.8b0d0078.svg" alt="zuai" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item list-items">
                                <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item list-items">
                                <Link className="nav-link" aria-current="page" to='/your-space'>My Space</Link>
                            </li>
                            <li className="nav-item list-items">
                                <button onClick={onLogout} className="btn btn-warning">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
