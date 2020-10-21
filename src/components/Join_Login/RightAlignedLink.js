import React from 'react';
import "./RightAlignedLink.css";
import { Link } from 'react-router-dom';


// props로 수정예정
const RightAlignedLink = ({ to, children }) => (
    <div className="Aligner">
        <Link to={to} className="JoinLink">{children}</Link>
    </div>
);

export default RightAlignedLink;