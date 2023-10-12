import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./SignIn.scss"
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {ApiUrl1} from "./apiHemis";
import Navbar from "./navbar";
import Footer from "./footer";
import {Button, Form, Input} from 'antd';
import AOS from "aos";



function SignIn(props) {
    const formRef = React.useRef(null);

    const navigate = useNavigate();

    const [passwordBoolin, setPasswordBoolin] = useState(true);
    const [message, setMessage] = useState('');
    const [loadings, setLoadings] = useState([]);

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 2000);
    };

    function Login(values) {
        const requestData = {
            login: values?.ism,
            password: values?.Parol
        };
        enterLoading(0)
        axios.post(`${ApiUrl1}auth/login`, requestData).then((response) => {
            localStorage.setItem("token", response.data.data.token);
            navigate("/studentInfo")
        }).catch((error) => {
            setMessage('Login yoki parol xato');
            console.log(error)
        })
}

    useEffect(() => {
        notify();
        setMessage('')

    },[message]);

    function notify() {
        if (message.trim().length> 0 ){
            toast.error(message)
        }
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
        window.scroll(0, 0)
    }, [])

    return (<>
            <Navbar/>
        <div  className="SignIn">
            <Link to={"/"} className="ortga"><i
                className="fa-solid fa-angles-left mx-1"/> Ortga
            </Link>
            <div data-aos="zoom-in" className="Signbox">

                <img className="Logo" src="./img/LOGO_TDTU_(2).png " alt=""/>
                <h3>WI FI dan foydalanish uchun ariza topshirish</h3>
                <p>"Hemis" Talaba ID ni kiriting</p>

                <Form
                    layout={{
                        labelCol: {
                            span: 8,
                        },
                        wrapperCol: {
                            span: 16,
                        },
                    }}
                    ref={formRef}
                    autoComplete="off"
                    onFinish={Login}
                >
                    <Form.Item
                        name="ism"
                        rules={[
                            {
                                required: true,
                                message: 'Talaba ID kiritilishda xato',
                                min: 1
                            }
                        ]}
                    >
                        <div className="inputBox">
                            <Input
                                type="text"
                                placeholder='Talaba ID'
                                name="ism"
                            >

                            </Input>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="Parol"
                        rules={[
                            {
                                required: true,
                                message: 'Parol kiritilishda xato',
                                min: 1
                            }
                        ]}
                    >
                        <div className="inputBox">
                            <Input type={passwordBoolin ? "password" : "text"}
                                   placeholder='Parol'
                                   name="Parol"
                            />

                            {passwordBoolin ?
                                <img onClick={() => setPasswordBoolin(!passwordBoolin)} src="./img/show(1).png" alt=""/>
                                :
                                <img onClick={() => setPasswordBoolin(!passwordBoolin)} src="./img/show.png" alt=""/>
                            }
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary" htmlType="submit" className="form-control"
                            loading={loadings[0]}
                        >Kirish</Button>
                    </Form.Item>
                </Form>


            </div>
            <img className="GroupImg" src="./img/Group5.svg" alt=""/>
        </div>
            <Footer/>
        </>
    );
}

export default SignIn;