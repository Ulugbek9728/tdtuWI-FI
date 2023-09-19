import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./SignIn.scss"
import {useNavigate} from "react-router";
import {toast, ToastContainer} from "react-toastify";
import {Link} from "react-router-dom";
import {Admin} from "./action";
import {useDispatch} from "react-redux";
import {ApiUrl} from "./domenName";


function SignIn(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [passwordBoolin, setPasswordBoolin] = useState(true);
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [message, setMessage] = useState('');


    function Login() {
        axios.post(`${ApiUrl}/auth/login`,
            {login, password}).then((response) => {
            if (response.status === 200) {
                dispatch(Admin(login));
                localStorage.setItem("token", response.data.jwt);
                setLogin('');
                setPassword('');
                navigate("/AdminPanell")
            }
        }).catch((error) => {
           setMessage(error.response.data);
        })}

    useEffect(() => {
        notify();
        setMessage('')

    },[message]);

    function notify() {
        if (message.trim().length> 0 ){
            toast.error(message)
        }
    }

    return (
        <div className="SignIn">
            <Link to={"/"} className="ortga"><i
                className="fa-solid fa-angles-left mx-1"/> Ortga
            </Link>
            <div className="Signbox">
                <ToastContainer/>

                <img className="Logo" src="./img/LOGO_TDTU_(2).png " alt=""/>
                <h3>Log in</h3>

                <input type="text" value={login} onChange={(e) => setLogin(e.target.value.toUpperCase())}
                       className="form-control" placeholder="Enter login" maxLength="9"/>
                <div className="inputBox">
                    <input type={passwordBoolin ? "password" : "text"}
                           className="form-control" placeholder="Enter password"
                           value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {passwordBoolin ?
                        <img onClick={() => setPasswordBoolin(!passwordBoolin)} src="./img/show(1).png" alt=""/>
                        :
                        <img onClick={() => setPasswordBoolin(!passwordBoolin)} src="./img/show.png" alt=""/>
                    }
                </div>
                <button onClick={Login} type="submit" className="form-control">Log in</button>

            </div>
            <img className="GroupImg" src="./img/Group5.svg" alt=""/>
        </div>
    );
}

export default SignIn;