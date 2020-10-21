import React from 'react';
import './Content.css';

const Content = ({ title, children }) => (
    <div>
        <div className="Title_Content">{title}</div>
        {children}
    </div>
);

export default Content;