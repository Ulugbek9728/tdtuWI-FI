import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "../componenta/navbar";
import "../componenta/main.css"
import Footer from "../componenta/footer";

function One(props) {
    return (<>
            <Navbar/>
            <div className="SignIn">

                <div className="Signbox">


                    <img className="Logo" src="./img/LOGO_TDTU_(2).png " alt=""/>
                    <h3>WI FI dan foydalanish uchun ariza topshirish</h3>


                    <Link to={'/Student'}>
                        <button type="submit" className="form-control">
                            Talaba
                        </button>
                    </Link>
                    <Link to={'/Employee'} >
                        <button type="submit" className="form-control my-4">Xodim</button>
                    </Link>


                </div>
                <img className="GroupImg" src="./img/Group5.svg" alt=""/>
            </div>
            <Footer/>
        </>
    );
}

export default One;