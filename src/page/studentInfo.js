import React, {useState} from 'react';
import Navbar from "../componenta/navbar";
import Footer from "../componenta/footer";
import {Input, Form, Button} from 'antd';

import "../asset/studentInfo.scss"
import {Link} from "react-router-dom";

function StudentInfo(props) {

    const [tel, setTel] = useState('');

    const onChange = (e) => {
        console.log('Change:', tel);
    };
    return (
        <div className='studentInfoBox'>
            <Navbar/>
            <Link to="/" className='ortga'>
                <i className="fa-solid fa-angles-left mx-1"/> Ortga
            </Link>
            <div className="studentInfo">
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
                <Form name="wrap" wrapperCol={{flex: 1,}} colon={false}>
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
                        <Input addonBefore="+998" showCount maxLength={9}
                               onChange={(e) => setTel(`+998${e.target.value}`)}/>
                    </Form.Item>

                    <div className="shartlar">
                        <a href={"/shartlar"} target='_blank'>Foydalanish shartlari</a>
                        <span>
                        <label htmlFor="shart">Shartlarga roziman</label>
                        <input id="shart" type="checkbox"/>
                    </span>
                    </div>

                    <Form.Item label=" ">
                        <Button htmlType="submit" onClick={onChange} className='btn btn-success mt-4'>Yuborish</Button>
                    </Form.Item>
                </Form>


            </div>
            <Footer/>
        </div>
    );
}

export default StudentInfo;