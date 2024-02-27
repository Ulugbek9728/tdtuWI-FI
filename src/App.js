import React from 'react';
import {Routes, Route} from "react-router-dom";
import SignIn from "./componenta/SignIn";
import One from "./page/one";
import StudentInfo from "./page/studentInfo";
import Aferta from "./page/aferta";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import "../src/css/fontawesome/css/all.min.css"
import './componenta/main.css'
import Employee from "./page/employee";
import AfertaEmployee from "./page/AfertaEmployee";

function App(props) {
    return (
        <div>
            <ToastContainer/>
            <Routes>
                <Route path={"/"} element={<One/>}/>

                <Route path={"/student"} element={<SignIn/>}/>

                <Route path={"/studentInfo"} element={<StudentInfo/>}/>
                <Route path={"/shartlar"} element={<Aferta/>}/>

                <Route path={"/employee"} element={<Employee/>}/>
                <Route path={"/shartlaremployee"} element={<AfertaEmployee/>}/>


            </Routes>
        </div>
    );
}

export default App;