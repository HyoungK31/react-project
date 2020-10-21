import React, { Component } from 'react';
import { Content, InputWithLabel, RightAlignedLink } from 'components/Join_Login';
import { JoinLoginButton } from 'components/Button';

class Register extends Component {
    render() {
        return (
            <Content title="회원가입">
                <InputWithLabel label="이메일" name="email" placeholder="이메일" />
                <InputWithLabel label="아이디" name="username" placeholder="아이디" />
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" />
                <InputWithLabel label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password" />
                <JoinLoginButton>회원가입</JoinLoginButton>
                <RightAlignedLink to="/join_login/login">로그인</RightAlignedLink>
            </Content>
        );
    }
}

export default Register;