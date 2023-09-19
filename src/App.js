import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomPage from "./componenta/homPage";
import Shartlar from "./componenta/shartlar";
import Natija from "./componenta/natija";
import SignIn from "./componenta/SignIn";
import Adminpanelll from "./componenta/Adminpanelll";



function App(props) {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<HomPage/>}/>
                <Route path={"/:id"} element={<HomPage/>}/>
                <Route path={"/shartlar"} element={<Shartlar/>}/>
                <Route path={"/natija"} element={<Natija/>}/>
                <Route path={"/SignInAdmin"} element={<SignIn/>}/>
                <Route path={"/AdminPanell/*"} element={<Adminpanelll/>}/>
            </Routes>
        </div>
    );
}

export default App;