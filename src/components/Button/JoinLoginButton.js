import React from 'react';
import './Button.css'

const JoinLoginButton = ({ children, onClick }) => (
    <button className="ButtonWrapper" onClick={onClick}>
        {children}
    </button>
);

export default JoinLoginButton;