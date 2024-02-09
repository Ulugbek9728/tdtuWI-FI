import React, {useEffect, useState} from 'react';
import {
    CopyOutlined
} from '@ant-design/icons';
import {toast} from "react-toastify";

function LoginParol(props) {
    const [sucsessText, setSucsessText] = useState('');

    function copyLogin() {

        navigator.clipboard.writeText(props.loginn.login);
        setSucsessText("Copied login")
    }
    function copyParol() {

        navigator.clipboard.writeText(props.loginn.parol);
        setSucsessText("Copied parol")
    }

    useEffect(() => {
        setSucsessText('')
        notify();
    }, [sucsessText,]);

    function notify() {
        if (sucsessText !== '') {
            toast.success(sucsessText)
        }
    }

    return (
        <div>
            <div className='Label'>Wi-Fi login</div>
            <div className='value'>
                {props.loginn.login}

                <button className="mx-4 btn btn-outline-dark" onClick={copyLogin}><CopyOutlined /></button>
            </div>
            <hr/>
            <div className='Label'>Wi-Fi parol</div>
            <div className='value'>
                {props.loginn.parol}
                <button className="mx-4 btn btn-outline-dark" onClick={copyParol}><CopyOutlined /></button>
            </div>
            <hr/>
        </div>
    );
}

export default LoginParol;