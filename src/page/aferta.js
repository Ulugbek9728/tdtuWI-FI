import React, {useEffect, useState} from 'react';
import AOS from "aos";
import Navbar from "../componenta/navbar";
import {Link} from "react-router-dom";
import Footer from "../componenta/footer";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {ApiUrl} from "../componenta/domenName";
import {Checkbox, Form, Button} from 'antd';
import {toast} from "react-toastify";


import axios from "axios";
import Loading from "../componenta/loading";

function Aferta(props) {
    const navigate = useNavigate();

    const fulInfo = useSelector(state => state.fulInfo)
    const [message, setMessage] = useState('');
    const [sucsessText, setSucsessText] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        AOS.init();
        if (fulInfo[0].student.phone===''){
            navigate("/studentInfo")
        }
        window.scroll(0, 0)
    }, [])

    const onFinish = (values) => {
        setLoading(true)
        if (values.remember === true){
            axios.post(`${ApiUrl}/api/application/submit` , fulInfo[0] , {
                headers: {"Content-Type": "application/json"}

            }).then((res)=>{
                setLoading(false)
                if (res.data?.isSuccess ===true){
                    setSucsessText("Ma'lumotlaringiz yuborildi")
                    document.location="https://internet.tdtu.uz"
                }
                else {setMessage(res.data?.message)}
            }).catch((error)=>{
                setLoading(false)

                console.log(error)
            })
        }
        else {}
    };
    useEffect(() => {
        setMessage('')
        setSucsessText('')
        notify();
    }, [message, sucsessText,]);

    function notify() {
        if (sucsessText !== '') {
            toast.success(sucsessText)
        }
        if (message !== '') {
            toast.error(message)
        }
    }
    return (
        <div className='studentInfoBox'>
            <Navbar/>
            {loading ?
                <Loading/>
                :
            <div data-aos="flip-left" className="aferta">
                <h4 className='text-center'>Universitet hududida Wi-Fi tarmog'idan foydalanish shartlari</h4>
                <p className=''>
                    Universitet internet tarmogʼidan foydalanilgan barcha internet resurslari murojaat
                    qilingan saytlar, koʼchirib olinayotgan maʼlumotlar Universitet serverida monitoring qilib boriladi.
                    Shu boisdan foydalanuvchi oʼziga berilgan <b>Login</b> - <b>Parol</b>dan faqatgina oʼzi foydalanishi lozim.
                    <i className='text-danger'>(foydalanuvshi oziga biriktirilgan login parol orqali kirilgan saytlarga javobgar!)</i>
                </p>
                <p>
                    Universitet internet tarmogʼidan faqat ilmiy ishlar olib borishda, ilmiy bilim va koʼnikmalarni
                    yanada mustahkamlash hamda lavozimga oid faoliyat maqsadlarida foydalanish zarur.
                </p>
                <p>
                    Universitet internet tarmogʼidan turli xil Oʼzbekiston Respublikasi siyosatiga, urf-odatiga va ahloq
                    normalariga zid boʼlgan saytlardan Oʼzbekiston Respublikasi qonunchiligiga zid boʼlgan, hududiy
                    yaxlitligini zoʼrlik bilan oʼzgartirishga daʼvat etishga, urush, zoʼravonlik, terrorizm, shuningdek
                    diniy ekstremizm, separatizm va fundamentalizm gʼoyalarini targʼib qilishga, milliy, irqiy, etnik
                    yoki diniy adovat qoʼzgʼatuvchi axborotni, pornografik xususiyatga ega boʼlgan barcha saytlardan, turli-hil
                    ijtimoiy tarmoqlardan, turli hil koʼngil ochar saytlardan,
                    taʼlim jarayoniga oid boʼlmagan audio va video fayllarni koʼchirish, taʼlim va ish jarayoni
                    taluqli boʼlmagan saytlar hamda VPN dasturlaridan foydalanish katʼiyan <b className='text-danger'>MАN ETILАDI</b> .
                </p>
                <div className='button mt-5'>
                    <Form
                        name="basic"
                        labelCol={{span: 8,}}
                        wrapperCol={{span: 16,}}
                        initialValues={{remember: true,}}
                        onFinish={onFinish}
                        autoComplete="off">
                        <Form.Item className='w-100'
                            name="remember" valuePropName="checked"
                                   rules={[
                                       {
                                           validator: (_, value) =>
                                               value ? Promise.resolve() : Promise.reject(new Error('Internetdan foydalanish talablariga rozilik bering!!!')),
                                       },
                                   ]}>
                            <Checkbox className='w-100'>Internetdan foydalanish talablariga roziman</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                                span: 56,}}
                            className='button d-flex justify-content-between' >
                            <Button className='btn btn-success mt-4' onClick={()=>navigate('/studentInfo')}>
                                <i className="fa-solid fa-angles-left mx-1"/> Ortga
                            </Button>
                            <Button type="success" htmlType="submit" className='btn btn-success mt-4'>
                                Yuborish
                            </Button>
                        </Form.Item>
                    </Form>

                </div>



            </div>
            }
            <Footer/>
        </div>
    );
}

export default Aferta;