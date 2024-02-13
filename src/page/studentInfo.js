import React, {useEffect, useState} from 'react';
import Navbar from "../componenta/navbar";
import Footer from "../componenta/footer";
import {Input, Form, Button} from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";
import "../asset/studentInfo.scss"
import {useDispatch, useSelector} from "react-redux";
import {ApiUrl1} from "../componenta/apiHemis";
import {ApiUrl} from "../componenta/domenName";
import axios from "axios";
import {useNavigate} from "react-router";
import Loading from "../componenta/loading";
import LoginParol from "../componenta/loginParol";



function StudentInfo(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [Login, setLogin] = useState(true);


    const fulInfo = useSelector(state => state.fulInfo)
    const [tel, setTel] = useState('+998');
    const [Student, setStudent] = useState({});
    const [StudentLogin, setStudentLogin] = useState({});
    const [data, setdata] = useState('');
    const onFinish = (values: any) => {
        dispatch({
            type: 'USER_FULL_INFO', payload: [
                {
                    type: "STUDENT",
                    student: {
                        fullName: Student.fullName,
                        group: Student.group,
                        login: Student.login,
                        phone: '+998' + tel
                    },
                    data: data

                }
            ]
        })
        navigate("/shartlar")

    };

    useEffect(() => {
        AOS.init();
        getStudent()
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        if (fulInfo[0]?.student?.phone?.slice(4, fulInfo?.student?.phone.length) === 'undefined') {
            setTel('')
        } else {
            setTel(fulInfo[0]?.student?.phone?.slice(4, fulInfo?.student?.phone.length));
        }
    }, [fulInfo])

    function getStudent() {
        setLoading(true)
        axios.get(`${ApiUrl1}account/me`, {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
        }).then((response) => {
            setLoading(false)
            setStudent({
                ...Student,
                fullName: response.data.data.full_name,
                login: response.data.data.student_id_number,
                imageUrl: response.data.data.image,
                specialty: response.data.data.specialty.name,
                group: response.data.data.group.name,
                faculty: response.data.data.faculty.name,
                course: response.data.data.level.name,
            })
            setdata(JSON.stringify(response.data.data))

            axios.get(`${ApiUrl}/api/application/check`, {
                params: {login:response.data.data.student_id_number}
            }).then((response) => {
                setLogin(true)
                setStudentLogin(response.data.data.loginPasswordDTO)
                console.log(response.data.data.loginPasswordDTO)
            }).catch((error) => {
                console.log(error);

            })

        }).catch((error) => {
            console.log(error);
            setLoading(false)

        })

    }


    return (
        <div className='studentInfoBox'>
            <Navbar/>
            {loading ?
                <Loading/>
                :
                <div data-aos="flip-left" className="studentInfo">
                    <div className="d-flex align-items-center mb-3">
                        {Student.imageUrl ? <img src={Student.imageUrl} alt=""/> :
                            <i className='fa-solid fa-user-tie'/>
                        }
                        <div>
                            <div className='Label'>FISH</div>
                            <div className='value'>{Student.fullName}</div>
                            <hr/>
                            <div className='Label'>Guruh</div>
                            <div className='value'>{Student.group}</div>
                        </div>
                    </div>
                    <div className='Label'>Fakultet</div>
                    <div className='value'>{Student.faculty}</div>
                    <hr/>
                    <div className='Label'>Yo'nalish</div>
                    <div className='value'>{Student.specialty}</div>
                    <hr/>
                    <div className='Label'>Kurs</div>
                    <div className='value'>{Student.course}</div>
                    <hr/>

                    {
                        Login ? <LoginParol loginn={{login:StudentLogin.username, parol:StudentLogin.password}}/> :

                            <>
                                <p className='Label'>Wi-Fi dan foydalanishga Login, Parol olish uchun telefon raqamni kiriting.
                                    Ma'lumotlaringiz tasdiqlansa kiritgan telefon raqamingizga Login Parol ni sms tariqa yuboramiz.
                                </p>
                                <Form name="wrap" wrapperCol={{flex: 1,}} colon={false} onFinish={onFinish}
                                      fields={[
                                          {
                                              name: 'Tel',
                                              value: tel,
                                          }
                                      ]}
                                >
                                    <Form.Item
                                        name="Tel"
                                        rules={[
                                            {

                                                required: true,
                                                message: 'Telefon raqamingizni kiriting',
                                            },

                                            {
                                                pattern: new RegExp(/^[0-9]+$/),
                                                message: 'Faqat raqam kiritilishi kerak'
                                            },
                                            {
                                                max: 9,
                                                min: 9,
                                                message: "Telefon raqam noto'g'ri kiritildi"
                                            }
                                        ]}
                                    >
                                        <Input value={fulInfo?.student?.phone} addonBefore="+998" showCount maxLength={9}
                                               onChange={(e) => setTel(`${e.target.value}`)}/>
                                    </Form.Item>


                                    <Form.Item className='button d-flex justify-content-between'>
                                        <Button className='btn btn-success mt-4' onClick={()=>navigate('/student')}>
                                            <i className="fa-solid fa-angles-left mx-1"/> Ortga
                                        </Button>
                                        <Button htmlType="submit" className='btn btn-success mt-4'>
                                            Keyingisi <i className="fa-solid fa-angles-right mx-1"/>
                                        </Button>
                                    </Form.Item>


                                </Form>
                            </>
                    }



                </div>
            }
            <Footer/>
        </div>
    );
}

export default StudentInfo;