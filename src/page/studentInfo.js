import React, {useEffect, useState} from 'react';
import Navbar from "../componenta/navbar";
import Footer from "../componenta/footer";
import {Input, Form, Button} from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";
import "../asset/studentInfo.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function StudentInfo(props) {
    const dispatch = useDispatch()
    const fulInfo = useSelector(state => state.fulInfo)
    console.log(fulInfo)
    const [tel, setTel] = useState( '+998');
    const [info, setInfo] = useState(true);

    const onChange = (e) => {

        dispatch({type: 'USER_FULL_INFO', payload: {tel: '+998'+tel}})
        setInfo(e)
    };
    useEffect(() => {
        AOS.init();
    }, [info])
    useEffect(()=>{
        setTel(fulInfo?.tel?.slice(4,fulInfo?.tel.length));
    },[fulInfo])
    return (
        <div className='studentInfoBox'>
            <Navbar/>
            <Link to="/student" className='ortga'>
                <i className="fa-solid fa-angles-left mx-1"/> Ortga
            </Link>

            <div data-aos="flip-left" className="studentInfo">
                <div className="d-flex align-items-center mb-3">
                    <i className='fa-solid fa-user-tie'/>
                    <div>
                        <div className='Label'>FISH</div>
                        <div className='value'>AZIZJONOV ABDULAZIZ UMARJON O‘G‘LI</div>
                        <hr/>
                        <div className='Label'>Guruh</div>
                        <div className='value'>157-22 EA (pri) (o‘z)</div>
                    </div>
                </div>
                <div className='Label'>Fakultet</div>
                <div className='value'>Elektronika va avtomatika fakulteti</div>
                <hr/>
                <div className='Label'>Yo'nalish</div>
                <div className='value'>Elektronika va asbobsozlik (priborsozlik)</div>
                <hr/>
                <div className='Label'>Kurs</div>
                <div className='value'>2-kurs</div>
                <hr/>
                <p className='Label'>Wi-Fi dan foydalanishga Login, Parol olish uchun telefon raqamni kiriting.
                    Ma'lumotlaringiz tasdiqlansa kiritgan telefon raqamingizga Login Parol ni sms tariqa yuboramiz.
                </p>

                <Form name="wrap" wrapperCol={{flex: 1,}} colon={false}
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
                        <Input  value={fulInfo.tel} addonBefore="+998" showCount maxLength={9}
                               onChange={(e) => setTel(`${e.target.value}`)}/>
                    </Form.Item>

                    <Form.Item className='button'>
                        <Button htmlType="submit" onClick={() => onChange(false)}
                                className='btn btn-success mt-4'>Keyingisi</Button>
                    </Form.Item>
                </Form>
            </div>
            <Footer/>
        </div>
    );
}

export default StudentInfo;