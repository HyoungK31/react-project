import React from 'react';
import { Route, Link } from 'react-router-dom';
import './LogoWrapper.css';

const LogoWrapper = ({ children }) => (

    <div className="Positioner_Logo">
        <div className="ShadowedBox_Logo">
            <div className="LogoWrapper_Logo">
                <Link to="/" className="Logo_Logo">Radiuslab</Link>
                <Route path="/" />
            </div>
            <div className="Contents_Logo">
                {children}
            </div>
        </div>
    </div>

);
export default LogoWrapper;