import React, {useEffect, useState} from 'react';
import Navbar from "../componenta/navbar";
import {Button, Form, Input} from "antd";
import Footer from "../componenta/footer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import "../asset/studentInfo.scss"
import AOS from "aos";
import {useSearchParams} from 'react-router-dom';
import axios from "axios";
import {ApiUrl} from "../componenta/domenName";
import Loading from "../componenta/loading";
import LoginParol from "../componenta/loginParol";


function Employee(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [Login, setLogin] = useState(false);

    const [Employee, setEmployee] = useState({});
    const [EmployeeLogin, setEmployeeLogin] = useState({});
    const [data, setdata] = useState(null);

    const [searchParams] = useSearchParams();

    const fulInfo = useSelector(state => state.fulInfo)

    const [tel, setTel] = useState('+998');

    useEffect(() => {
        AOS.init();
        window.scroll(0, 0)
        if (fulInfo[0]?.employee?.phone?.slice(4, fulInfo?.employee?.phone.length) === 'undefined') {
            setTel('')
        } else {
            setTel(fulInfo[0]?.employee?.phone?.slice(4, fulInfo?.employee?.phone.length));
        }
        getEmploee()

    }, [])

    useEffect(() => {
        if (!fulInfo[0]?.employee?.fullName) {

        } else {
            setEmployee(fulInfo[0]?.employee);
        }
    }, [])
    const onFinish = (values: any) => {
        dispatch({
            type: 'USER_FULL_INFO', payload: [
                {
                    type: "EMPLOYEE",
                    employee: {
                        fullName: Employee.fullName,
                        imageUrl: Employee.imageUrl,
                        login: Employee.login,
                        department: JSON.stringify(Employee.department),
                        departmentId: Employee?.department?.id,
                        staffPosition: JSON.stringify(Employee?.staffPosition),
                        staffPositionId: Employee?.staffPosition?.code,
                        phone: '+998' + tel
                    },
                    data: data

                }
            ]
        })

        navigate("/shartlaremployee")
    };

    function getEmploee() {
        setLoading(true)
        axios.get(`${ApiUrl}/api/v1/hemis-oauth`, {
            params: {
                code: searchParams.get('code'),
                state: searchParams.get('state')
            }
        }).then((response) => {
            setLoading(false)
            if (response.data.isSuccess === true) {
                setEmployee({
                    ...Employee,
                    fullName: response.data?.data?.fullName,
                    login: response.data?.data?.employeeIdNumber,
                    imageUrl: response.data?.data?.image,
                    department: response.data?.data?.department,
                    staffPosition:response.data?.data?.staffPosition,
                })
                setLogin(response.data.data.exist)
                setEmployeeLogin(response.data.data.loginPasswordDTO)
            }
            console.log(response.data.data)
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
                        {Employee.imageUrl ? <img src={Employee.imageUrl} alt=""/> :
                            <i className='fa-solid fa-user-tie'/>}
                        <div>
                            <div className='Label'>FISH</div>
                            <div className='value'>
                                {Employee.fullName}
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className='Label'>Lavozim</div>
                    <div className='value'>
                        {Employee?.staffPosition?.name}
                        {}
                    </div>
                    <hr/>
                    {
                        Login ? <LoginParol loginn={{login:EmployeeLogin.username, parol:EmployeeLogin.password}}/> :

                            <>
                                <p className='Label'>Wi-Fi dan foydalanishga Login, Parol olish uchun telefon raqamni kiriting.
                                    Ma'lumotlaringiz tasdiqlansa kiritgan telefon raqamingizga Login Parol ni sms tariqa yuboramiz.
                                </p>

                                <Form name="wrap" wrapperCol={{flex: 1,}} colon={false} onFinish={onFinish}
                                      fields={[{
                                          name: 'Tel',
                                          value: tel,
                                      }]}>
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
                                        <Input value={fulInfo[0]?.emlpoyee?.phone} addonBefore="+998" showCount maxLength={9}
                                               onChange={(e) => setTel(`${e.target.value}`)}/>
                                    </Form.Item>

                                    <Form.Item className='button d-flex justify-content-between'>
                                        <Button className='btn btn-success mt-4' onClick={() => navigate('/')}>
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

export default Employee;