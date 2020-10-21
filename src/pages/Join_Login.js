import React, { Component } from 'react';
import { LogoWrapper } from 'components/Join_Login';
import { Route } from 'react-router-dom';
import { Login, Register } from 'containers/Join_Login';

class Join_Login extends Component {
    render() {
        return (
            <LogoWrapper>
                <Route path="/join_login/login" component={Login} />
                <Route path="/join_login/register" component={Register} />
            </LogoWrapper>
        );
    }
}

export default Join_Login;