import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import "../css/fontawesome/css/all.min.css"
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";
import {Actions} from "./action";
import {ApiUrl} from "./domenName";
import "./main.css"
import Navbar from "./navbar";
import Footer from "./footer";

function HomPage(props) {


    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [shartlar, setShartlar] = useState(false);
    const [errortext, setErrortext] = useState([]);
    const [userError, setuserError] = useState('');
    const [success, setSuccess] = useState(false);

    const [faculty, setFaculty] = useState("");
    const [name, setName] = useState("");
    const [Sharif, setSharif] = useState("");
    const [phone, setPhone] = useState("");
    const [surname, setSurname] = useState("");
    const [logintest, setLogintest] = useState("");


    function getText() {

        const fakultet = document.getElementById('Fakultet').value;
        if (fakultet.trim().length > 0) {
            document.getElementById('Fakultet').classList.remove("inputred");

        } else {
            document.getElementById('Fakultet').classList.add("inputred");
        }

        const lavozim = document.getElementById('Lavozim').value;
        if (lavozim.trim().length > 0) {
            document.getElementById('Lavozim').classList.remove("inputred");

        } else {
            document.getElementById('Lavozim').classList.add("inputred");
        }

        const familya = document.getElementById('Familya').value;
        if (familya.trim().length > 0) {
            document.getElementById('Familya').classList.remove("inputred");

        } else {
            document.getElementById('Familya').classList.add("inputred");
        }

        const Ism = document.getElementById('Ism').value;
        if (Ism.trim().length > 0) {
            document.getElementById('Ism').classList.remove("inputred");
        } else {
            document.getElementById('Ism').classList.add("inputred");
        }

        const shariff = document.getElementById('Sharif').value;
        if (shariff.trim().length > 0) {
            document.getElementById('Sharif').classList.remove("inputred");
        } else {
            document.getElementById('Sharif').classList.add("inputred");
        }

        const Telefon = document.getElementById('Telefon').value;
        if (Telefon.trim().length === 13) {
            document.getElementById('Telefon').classList.remove("inputred");

        } else {
            document.getElementById('Telefon').classList.add("inputred");
        }

    }

    function Auth() {
        getText();
    }

    useEffect(() => {
        notify();
    }, [errortext, userError, success]);

    function notify() {
        errortext && errortext.map((item) => (
            toast.error(item)
        ));

        if (success === false) {
            if (userError === '') {
            } else toast.error(userError);
        } else toast.success(id ? "Ma'lumotingiz saqlandi!!!" : "Ro'yxatdan o'tdingiz!!!");

        setuserError('');
        setSuccess(false);
        setErrortext('')
    };

    function profile_flu_info() {
        axios.get(`${ApiUrl}/profile/public/full_info/${logintest}`).then((response) => {
            if (response.status === 200) {
                dispatch(Actions(response.data));
                navigate("/natija")
            }
        }).catch((error) => {
            console.log(error.response);
            setuserError(error.response.data)
            if (error.response.data.status <= 500) {
                setuserError("Server bilan ulanishda xatolik")
            };
        })
    }

useEffect(()=>{
    axios.get(`https://student.tiace.uz/rest/v1/data/department-list/?&limit=200` ,{
        headers :{"Authorization": "Bearer X5mD1MtD3DdG7ndKMCuR199LHkx6xk6m"}
    }).then((response) => {
        console.log(response.data)

    }).catch((error) => {
        console.log(error.response);

    })
},[])
    return (

        <div className="HomePage">

            <div className="App">
                <div className="box">
                    <Navbar/>
                    <ToastContainer/>
                    <h3 className="eslatma">Ma'lumotlarni "Lotin" alifbosida to'ldirish shart !!!</h3>
                    <div className="karobka">
                        <Link to="/" className='ortga'>
                            <i className="fa-solid fa-angles-left mx-1"/> Ortga
                        </Link>
                        <div className="left">
                            <div className="formbox">
                                <div>
                                    <label htmlFor="Fakultet">Fakultet:</label><br/>
                                    <select value={faculty} onChange={(e) => setFaculty(e.target.value)}
                                            id="Fakultet"
                                            name="Fakultet">
                                        <option></option>
                                        <option>Elektr energetikasi</option>
                                        <option>Issiqlik energetikasi</option>
                                        <option>Geologiya qidiruv kon-metalurgiya</option>
                                        <option>Elektronika va avtomatika</option>
                                        <option>Mashinasozlik</option>
                                        <option>Neft va gaz</option>
                                        <option>Muxandislik texnologiyalari</option>
                                        <option>Qo'shma ta'lim dasturi</option>
                                        <option>Sirtqi ta'lim</option>
                                        <option>Yaponiya maxsus kursi</option>
                                    </select><br/>
                                    <label htmlFor="Lavozim">Lavozim:</label><br/>
                                    <input id="Lavozim" className="input" type="text" placeholder="Lavozim"/>


                                    <label htmlFor="Familya">Familya:</label><br/>
                                    <input value={surname} onChange={(e) => setSurname(e.target.value)}
                                           id="Familya" className="input" type="text" placeholder="Familyangiz"/>

                                    <label htmlFor="Ism">Ism:</label><br/>
                                    <input value={name} onChange={(e) => setName(e.target.value)}
                                           id="Ism" className="input" type="text" placeholder="Ismingiz"/>

                                    <label htmlFor="Sharif">Sharif</label>
                                    <input value={Sharif} id="Sharif" className="input" type="text" placeholder="Sharif"
                                           onChange={(e) => setSharif(e.target.value)}/>

                                    <label htmlFor="Telefon">Telefon:</label><br/>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)}
                                           id="Telefon" maxLength="13" className="input" type="tel"
                                           placeholder="Telefon raqamingiz"/>

                                    <div className="shartlar">
                                        <a href={"/shartlar"} target='_blank'>Foydalanish shartlari</a>
                                        <span>
                                            <label htmlFor="shart">Shartlarga roziman</label>
                                            <input onClick={() => setShartlar(!shartlar)} id="shart" type="checkbox"/>
                                        </span>
                                    </div>
                                    <button onClick={Auth} className="button-container-2">
                                        <span className="mas">YUBORISH</span>
                                        <p>YUBORISH</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="righte">
                            <div className="boxcha">
                                <div className="title">
                                    Wi-Fi tarmog'idan foydalanish bo'yicha nizom
                                </div>
                                <div className="text">
                                    Islom Karimov nomidagi Toshkent Davlat Texnika Universiteti hududida WI-FI
                                    tarmog'idan foydalanish
                                    bo'yicha video qo'llanma bilan tanishib chiqing
                                </div>
                                <a href="https://www.youtube.com/channel/UCVeUzoJ6466s6yh4LPPS-zA" target="_blank">
                                    <button className="button-container-2 video">
                                        <span className="mas">VIDEO QO'LLANMA</span>
                                        <p>VIDEO QO'LLANMA</p>
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                   <Footer/>

                </div>

            </div>
        </div>

    );
}

export default HomPage;