import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomPage from "./componenta/homPage";
import Shartlar from "./componenta/shartlar";
import Natija from "./componenta/natija";
import SignIn from "./componenta/SignIn";
import Adminpanelll from "./componenta/Adminpanelll";
import One from "./page/one";




function App(props) {
    return (
        <div>
            <Routes>

                {/*<Route path={"/:id"} element={<HomPage/>}/>*/}

                <Route path={"/"} element={<One/>}/>
                <Route path={"/Student"} element={<SignIn/>}/>
                <Route path={"/shartlar"} element={<Shartlar/>}/>
                <Route path={"/Employee"} element={<HomPage/>}/>


                <Route path={"/natija"} element={<Natija/>}/>
                <Route path={"/AdminPanell/*"} element={<Adminpanelll/>}/>
            </Routes>
        </div>
    );
}

export default App;