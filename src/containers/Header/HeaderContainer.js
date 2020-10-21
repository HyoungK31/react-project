import React, { Component } from 'react';
import Header from 'components/Header';
import { MiddleButton } from 'components/Button';

class HeaderContainer extends Component {
    render() {
        return (
            <Header>
                <MiddleButton />
            </Header>
        );
    }
}

export default HeaderContainer;