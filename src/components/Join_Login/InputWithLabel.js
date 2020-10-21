import React from 'react';
import './InputWithLabel.css';

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithLabel = ({ label, ...rest }) => (
    <div className="Wrapper">
        <div className="InputLabel">{label}</div>
        <input className="Join_Login_Input" {...rest} />
    </div>
);

export default InputWithLabel;