import React, { Component } from 'react';
import { Content, InputWithLabel, RightAlignedLink } from 'components/Join_Login';
import { JoinLoginButton } from 'components/Button';

class Login extends Component {
    render() {
        return (
            <Content title="로그인">
                <InputWithLabel label="이메일" name="email" placeholder="이메일" />
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" />
                <JoinLoginButton>로그인</JoinLoginButton>
                <RightAlignedLink to="/join_login/register">회원가입</RightAlignedLink>
            </Content>
        );
    }
}

export default Login;