import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

const MiddleButton = () => (
    <div>
        <Link to="/join_login/login">
            <button className="MiddleButton">
                로그인 / 가입
            </button>
        </Link>
    </div>
);

export default MiddleButton;