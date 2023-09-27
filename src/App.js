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




function App(props) {
    return (
        <div>
            <ToastContainer/>
            <Routes>
                <Route path={"/"} element={<One/>}/>
                <Route path={"/student"} element={<SignIn/>}/>
                <Route path={"/shartlar"} element={<Aferta/>}/>
                <Route path={"/studentInfo"} element={<StudentInfo/>}/>
            </Routes>
        </div>
    );
}

export default App;