import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import "../css/fontawesome/css/all.min.css"
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "./action";
import {ApiUrl} from "./domenName";
import "./main.css"

function HomPage(props) {
    const store = useSelector(state => state.fulInfo);

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [shartlar, setShartlar] = useState(false);
    const [passwordBoolin, setPasswordBoolin] = useState(true);
    const [lavozimBolin, setLavozimBolin] = useState(false);
    const [errortext, setErrortext] = useState([]);
    const [userError, setuserError] = useState('');
    const [success, setSuccess] = useState(false);

    const [faculty, setFaculty] = useState("");
    const [groups, setGroups] = useState("");
    const [login, setLogin] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [surname, setSurname] = useState("");

    const [logintest, setLogintest] = useState("");

    function editUser() {
        if (id) {
            setFaculty(store.FACULTY);
            setGroups(store.GROUP);
            setLogin(store.LOGIN);
            setName(store.NAME);
            setPassword(store.PASSWORD);
            setPhone(store.PHONE);
            setSurname(store.SURNAME);
        }
    }

    function pasportSeriya() {
        if (login.substring(0, 1) >= 0) {
            document.getElementById('Login').classList.add("inputred")
        } else if (login.substring(1, 2) >= 0) {
            document.getElementById('Login').classList.add("inputred")
        } else {
            document.getElementById('Login').classList.remove("inputred")
        }
    }

    function pasportNumber() {
        if (login.substring(2, 9) / login.substring(2, 9) === 1) {
            document.getElementById('Login').classList.remove("inputred")
        } else {
            document.getElementById('Login').classList.add("inputred")
        }
    }

    function getText() {
        if (lavozimBolin === true) {
            const guruh = document.getElementById('Gurux').value;
            if (guruh.trim().length > 0) {
                document.getElementById('Gurux').classList.remove("inputred");

            } else {
                document.getElementById('Gurux').classList.add("inputred");
            }
        }

        const login = document.getElementById('Login').value;
        if (login.trim().length === 9) {
            pasportSeriya();
            pasportNumber();
        } else {
            document.getElementById('Login').classList.add("inputred");
        }

        const fakultet = document.getElementById('Fakultet').value;
        if (fakultet.trim().length > 0) {
            document.getElementById('Fakultet').classList.remove("inputred");

        } else {
            document.getElementById('Fakultet').classList.add("inputred");
        }

        const password = document.getElementById('Password').value;
        if (password.trim().length === 8) {
            document.getElementById('Password').classList.remove("inputred");
        } else {
            document.getElementById('Password').classList.add("inputred");
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

        const Telefon = document.getElementById('Telefon').value;
        if (Telefon.trim().length === 13) {
            document.getElementById('Telefon').classList.remove("inputred");

        } else {
            document.getElementById('Telefon').classList.add("inputred");
        }

    }

    function Auth() {
        getText();
        if (shartlar === true) {
            if (id) {
                lavozimBolin ?
                    axios.post(`${ApiUrl}/auth/update/student/${id}`,
                        {
                            degree: "TALABA",
                            faculty, groups, login,
                            name, password, phone, surname
                        }).then((response) => {

                        if (response.status === 200) {
                            setSuccess(true);
                            dispatch(Actions({}));
                            setFaculty('');
                            setGroups('');
                            setLogin('');
                            setName('');
                            setPassword('');
                            setPhone('');
                            setSurname('')

                        }
                    }).catch((error) => {
                        setuserError(error.response.data);
                        setErrortext(error.response.data.errors);
                    })
                    :
                    axios.post(`${ApiUrl}/auth/update/teacher/${id}`,
                        {
                            degree: "USTOZ",
                            group: null,
                            faculty, login,
                            name, password, phone, surname
                        }).then((response) => {
                        if (response.status === 200) {
                            setSuccess(true);
                            dispatch(Actions({}));
                            setFaculty('');
                            setGroups('');
                            setLogin('');
                            setName('');
                            setPassword('');
                            setPhone('');
                            setSurname('')

                        }
                    }).catch((error) => {
                        setuserError(error.response.data);
                        setErrortext(error.response.data.errors);
                    })
            }
            else
                lavozimBolin ?
                    axios.post(`${ApiUrl}/auth/registration/student`, {
                        faculty, groups, login,
                        name, password, phone, surname
                    }).then((response) => {
                        if (response.status === 201) {
                            setSuccess(true);
                            setFaculty('');
                            setGroups('');
                            setLogin('');
                            setName('');
                            setPassword('');
                            setPhone('');
                            setSurname('')
                        }
                    }).catch((error) => {
                        setuserError(error.response.data);
                        setErrortext(error.response.data.errors);
                    })
                    :
                    axios.post(`${ApiUrl}/auth/registration/teacher`,
                        {
                            faculty, login, name, password, phone, surname
                        }).then((response) => {
                        if (response.status === 201) {
                            setSuccess(true);
                            setFaculty('');
                            setGroups('');
                            setLogin('');
                            setName('');
                            setPassword('');
                            setPhone('');
                            setSurname('')
                        }
                    }).catch((error) => {
                        setuserError(error.response.data);
                        setErrortext(error.response.data.errors);
                    })
        } else {}
    }

    useEffect(() => {
        notify();
        editUser()
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
                    <div className="navbar">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 navBox">
                                    <p className="title">Islom Karimov nomidagi Toshkent Davlat Texnika Universiteti</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer/>
                    <h3 className="eslatma">Ma'lumotlarni "Lotin" alifbosida to'ldirish shart !!!</h3>
                    <div className="karobka">
                        <a href="http://tdtu.uz" target={"_blank"}>
                            <img className="logoNavbar" src="img/LOGO_TDTU_(2).png" alt=""/>
                        </a>
                        <div className="left">
                            <div className="formbox">
                                <div>
                                    <div className="lavozim" id={"lavozim"}>
                                        <p>Lavozim:</p>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <div>
                                                <label htmlFor="talaba">Talaba</label>
                                                <input
                                                    onClick={() => setLavozimBolin(true)} type="radio" value="Talaba"
                                                    className="mx-3 input" id="talaba" name="lavozim"/>
                                            </div>
                                            <div>
                                                <label htmlFor="O'qituvchi">O'qituvchi</label>
                                                <input onClick={() => setLavozimBolin(false)} type="radio"
                                                       value="Oqituvchi"
                                                       className="mx-3 input" id="O'qituvchi" name="lavozim"/>
                                            </div>
                                            <div>
                                                <label htmlFor="Prof. oqituvchi">Prof. o'qituvchi</label>
                                                <input onClick={() => setLavozimBolin(false)} type="radio"
                                                       value="Prof. oqituvchi"
                                                       className="mx-3 input" id="Prof. oqituvchi" name="lavozim"/>
                                            </div>

                                        </div>
                                    </div>

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
                                    {lavozimBolin ?
                                        <div id="guruh">
                                            <label htmlFor="Gurux">Guruh:</label><br/>
                                            <input value={groups} onChange={(e) => setGroups(e.target.value)} id="Gurux"
                                                   type="text"
                                                   className="input" placeholder="Guruhingiz" required/>
                                        </div> : <div id="guruh"/>}

                                    <label htmlFor="Login">Login:</label><br/>
                                    <input value={login} onChange={(e) => setLogin(e.target.value.toUpperCase())}
                                           id="Login" maxLength="9" type="text" className="input "
                                           placeholder="Pasport seriyangiz"/>

                                    <label htmlFor="Password">Password:</label>
                                    <div className="inputBox">
                                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                                               id="Password" maxLength="8" className="input"
                                               type={passwordBoolin ? "password" : "text"}
                                               placeholder="*******"/>
                                        {passwordBoolin ?
                                            <img onClick={() => setPasswordBoolin(!passwordBoolin)}
                                                 src="./img/show(1).png" alt=""/>
                                            :
                                            <img onClick={() => setPasswordBoolin(!passwordBoolin)} src="./img/show.png"
                                                 alt=""/>
                                        }
                                    </div>

                                    <label htmlFor="Familya">Familya:</label><br/>
                                    <input value={surname} onChange={(e) => setSurname(e.target.value)}
                                           id="Familya" className="input" type="text" placeholder="Familyangiz"/>

                                    <label htmlFor="Ism">Ism:</label><br/>
                                    <input value={name} onChange={(e) => setName(e.target.value)}
                                           id="Ism" className="input" type="text" placeholder="Ismingiz"/>

                                    <label htmlFor="Telefon">Telefon:</label><br/>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)}
                                           id="Telefon" maxLength="13" className="input" type="tel"
                                           placeholder="Telefon raqamingiz"/>

                                    <div className="shartlar">
                                        <Link to={"/shartlar"}>Foydalanish shartlari</Link>
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
                                <div className="zzz"/>
                                <div className="title">
                                    Foydalanuvchining Wi-Fi tarmog'idagi holatini tekshirish va "ID" sini olish.
                                </div>
                                <label htmlFor="Logintest">Login:</label><br/>
                                <input onChange={(e) => setLogintest(e.target.value.toUpperCase())}
                                       id="Logintest" value={logintest} maxLength="9" type="text"
                                       placeholder="Pasport seriyangiz" className="input"/>

                                <button onClick={profile_flu_info} className="button-container-2 tekshirish">
                                    <span className="mas">TEKSHIRISH</span>
                                    <p>TEKSHIRISH</p>
                                </button>

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
                                        <span>
                                            <i className="fab fa-facebook-f"></i>
                                        </span>
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
                        <div className="righte">

                        </div>

                    </div>

                </div>

            </div>
        </div>

    );
}

export default HomPage;