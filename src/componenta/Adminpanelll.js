import React from 'react';
import {Route, Routes} from "react-router";
import Activ from "./Activ";
import Umumiy from "./Umumiy";
import NoActiv from "./NoActiv";

function Adminpanelll(props) {
    return (<>

            <Routes>
                <Route path={"/Activ"} element={<Activ/>}/>
                <Route path={"/NoActiv"} element={<NoActiv/>}/>
                <Route path={"/"} element={<Umumiy/>}/>
            </Routes>

        </>
    );
}

export default Adminpanelll;