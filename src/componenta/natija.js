import React, {useEffect, useState} from 'react';
import "../css/fontawesome/css/all.min.css"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./main2.css"


function Natija(props) {
    const store = useSelector(state => state.fulInfo);

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        notify();

    },[copied]);

    function notify() {

        if (copied === true) {
            toast.success("Nusxa olindi")
        }
    }
    return (
        <div className="App">
            <div className="box">
                <div className="navbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 navBox">
                                <p className="title">
                                    Islom Karimov nomidagi Toshkent Davlat Texnika
                                    Universiteti
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="karobka">
                    <Link to={"/"} className="ortga"><i
                        className="fa-solid fa-angles-left mx-1"/> Ortga
                    </Link>
                    <a href="http://tdtu.uz" target={"_blank"}>
                        <img className="logoNavbar" src="img/LOGO_TDTU_(2).png" alt=""/>
                    </a>
                    <ToastContainer/>

                    <div className="left2">
                            <table className="table" align="center">
                                <thead>
                                <tr>
                                    <th>Ma'lumot</th>
                                    <th>Foydalanuvchi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td width="40%">Foydalanuvchi holati:</td>
                                    <td width="60%">{store.STATUS}</td>
                                </tr>
                                <tr>
                                    <td width="40%">Lavozim:</td>
                                    <td width="60%">{store.DEGREE}</td>
                                </tr>
                                <tr>
                                    <td width="40%">Fakultet:</td>
                                    <td width="60%">{store.FACULTY}</td>
                                </tr>
                                <tr>
                                    <td width="40%">Guruh:</td>
                                    <td width="60%">{store.GROUP}</td>
                                </tr>
                                <tr>
                                    <td width="40%">Login:</td>
                                    <td width="60%">{store.LOGIN}</td>
                                </tr>
                                <tr>
                                    <td width="40%">Password:</td>
                                    <td width="60%">{store.PASSWORD}</td>
                                </tr>
                                <tr>
                                    <td width="40%">Familya:</td>
                                    <td width="60%">{store.SURNAME}</td>
                                </tr>
                                <tr>
                                    <td width="40%">Ism:</td>
                                    <td width="60%">{store.NAME}</td>
                                </tr>
                                <tr>
                                    <td width="40%">Telefon:</td>
                                    <td width="60%">{store.PHONE}</td>
                                </tr>
                                <tr>
                                    <td width="40%">ID:</td>
                                    <td style={{position:"relative"}} width="60%">
                                        <input disabled className="form-control" type="text" value={store.ID}/></td>
                                    <CopyToClipboard text={store.ID} onCopy={() =>setCopied (true)}>
                                    <span>
                                        <img src="./img/copy.png" alt=""/>
                                    </span>
                                    </CopyToClipboard>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="right2">
                            <div className="boxcha">
                                <p align="justify" className="text">
                                    Wi-Fi tarmog'idan foydalanish uchun sayt orqali ro'yxatdan
                                    o'tganingizdan so'ng 24 soat mobaynida administrator tomonidan
                                    sizning ma'lumotlaringiz ko'rib chiqilib,
                                    ma'lumotlar to'liq va to'g'ri bo'lsa sizning loginingiz faollashtiriladi.
                                </p>
                                <hr/>
                                    <p align="justify" className="text">
                                        "Foydalanuvchi holati" ACTIV bo'lsa Login hamda Parolingiz yordamida
                                        Universitet hududida
                                        Wi-Fi tarmog'idan foydalanishingiz mumkun.
                                    </p>
                                    <hr/>

                                        <p align="justify" className="text">
                                            Agarda "Foydalanuvchi holati" BLOCK bo'lsa to'ldirilgan
                                            ma'lumotlaringizda xatolik mavjud. Ma'lumotlaringizni
                                            quyidagi "Taxrirlash" tugmasi orqali
                                            qaytadan to'ldiring.
                                        </p>
                                <Link to={`/${store.ID}`}>
                                    <button className="button-container-2">
                                        <span className="mas">Taxrirlash</span>
                                        <p>Taxrirlash</p>
                                    </button>
                                </Link>

                            </div>

                        </div>
                </div>
                <div className="footer">
                    <div className="left">
                        <p>Bizning Ijtimoiy Tarmoqlar:</p>
                        <ul className="wrapper">
                            <li>
                                <a className="icon facebook" href="#">
                                    <span className="tooltip">Facebook</span>
                                    <span><i className="fab fa-facebook-f"></i></span>
                                </a>
                            </li>
                            <li>
                                <a className="icon twitter" href="#">
                                    <span className="tooltip">Twitter</span>
                                    <span><i className="fab fa-twitter"></i></span>
                                </a>
                            </li>
                            <li>
                                <a className="icon instagram" target="_blank"
                                   href="https://instagram.com/tdtu.offical?igshid=YmMyMTA2M2Y=">
                                    <span className="tooltip">Instagram</span>
                                    <span><i className="fab fa-instagram"></i></span>
                                </a>
                            </li>
                            <li>
                                <a className="icon youtube" target="_blank"
                                   href="https://www.youtube.com/channel/UCVeUzoJ6466s6yh4LPPS-zA">
                                    <span className="tooltip">Youtube</span>
                                    <span><i className="fab fa-youtube"></i></span>
                                </a>

                            </li>
                            <li>
                                <a className="icon telegram" target="_blank"
                                   href="https://t.me/ToshDTU_Matbuot_Xizmati">
                                    <span className="tooltip">Telegram</span>
                                    <span><i className="fab fa-telegram"></i></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="center">
                        <Link to={"/SignInAdmin"}>
                            <p>
                                RTTM-2022
                            </p>
                        </Link>

                    </div>
                    <div className="righte"></div>
                </div>
            </div>
        </div>
    );
}

export default Natija;