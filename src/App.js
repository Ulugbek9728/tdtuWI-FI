import React from 'react';
import {Routes, Route} from "react-router-dom";
import Shartlar from "./componenta/shartlar";
import SignIn from "./componenta/SignIn";
import One from "./page/one";
import StudentInfo from "./page/studentInfo";
import './componenta/main.css'




function App(props) {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<One/>}/>
                <Route path={"/student"} element={<SignIn/>}/>
                <Route path={"/shartlar"} element={<Shartlar/>}/>
                <Route path={"/studentInfo"} element={<StudentInfo/>}/>
            </Routes>
        </div>
    );
}

export default App;