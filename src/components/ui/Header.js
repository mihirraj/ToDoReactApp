import React from 'react';
import InputBox from './InputBox';

export default function Header(props) {
    return (
        <header>
            <InputBox {...props}/>
        </header>
    );
}
