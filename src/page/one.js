import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Navbar from "../componenta/navbar";
import "../componenta/main.css"
import Footer from "../componenta/footer";
import AOS from "aos";
import "aos/dist/aos.css";



function One(props) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
        window.scroll(0, 0)
    }, [])

    return (<>
            <Navbar/>
            <div className="SignIn">

                <div data-aos="zoom-in" className="Signbox">
                    <img className="Logo" src="./img/LOGO_TDTU_(2).png " alt=""/>
                    <h3>WI FI dan foydalanish uchun ariza topshirish</h3>

                    <Link to={'/student'} onClick={() => localStorage.setItem("user", "Student")}>
                        <button type="submit" className="form-control">
                            Talabalar
                        </button>
                    </Link>
                    <a href={'https://hemis.tdtu.uz/oauth/authorize?response_type=code&client_id=3&state=TmuYvLHX1YKkJ5enM89k3g2dp2MWjDwUMiBt7DiQ0YI%3D&redirect_uri=http://localhost:1010/hemis-login'} target='_blank'>
                        <button type="submit" className="form-control my-4">
                            Hodimlar
                        </button>
                    </a>
                    <a href={'https://t.me/tdtu_rttm_bot'} target='_blank'>
                        <button type="submit" className="form-control my-4">
                            Telegram bot orqali
                        </button>
                    </a>
                </div>
                <img className="GroupImg" src="./img/Group5.svg" alt=""/>
            </div>
            <Footer/>
        </>
    );
}

export default One;