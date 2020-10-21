import React from 'react';
import './Header.css';

const Header = ({ children }) => {
    return (
        <div className="Positioner">
            <div className="WhiteBackground">
                <div className="HeaderContents">
                    <div className="Logo">
                        Radiuslab
                    </div>
                    <div className="Spacer" />
                    {children}
                </div>
            </div>
            <div className="GradientBorder" />
        </div>
    );
};

export default Header;