import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomPage from "./componenta/homPage";
import Shartlar from "./componenta/shartlar";
import Natija from "./componenta/natija";
import SignIn from "./componenta/SignIn";
import Adminpanelll from "./componenta/Adminpanelll";
import One from "./page/one";
import StudentInfo from "./page/studentInfo";




function App(props) {
    return (
        <div>
            <Routes>

                {/*<Route path={"/:id"} element={<HomPage/>}/>*/}

                <Route path={"/"} element={<One/>}/>
                <Route path={"/student"} element={<SignIn/>}/>
                <Route path={"/shartlar"} element={<Shartlar/>}/>
                <Route path={"/employee"} element={<HomPage/>}/>
                <Route path={"/studentInfo"} element={<StudentInfo/>}/>


                <Route path={"/natija"} element={<Natija/>}/>
                <Route path={"/sdminPanell/*"} element={<Adminpanelll/>}/>
            </Routes>
        </div>
    );
}

export default App;