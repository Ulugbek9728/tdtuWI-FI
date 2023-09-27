import React, {useEffect} from 'react';
import AOS from "aos";
import Navbar from "../componenta/navbar";
import {Link} from "react-router-dom";
import Footer from "../componenta/footer";

function Aferta(props) {

    useEffect(() => {
        AOS.init();

    }, [])
    return (
        <div className='studentInfoBox'>
            <Navbar/>
            <Link to="/studentInfo" className='ortga'>
                <i className="fa-solid fa-angles-left mx-1"/> Ortga
            </Link>

            <div data-aos="flip-left" className="aferta">
                <h4 className='text-center'>Aferta</h4>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae cupiditate, dolor eaque odio
                    officiis qui quidem ratione recusandae unde! Aliquam aliquid asperiores consequatur delectus, dolor
                    esse id ipsum laboriosam nam nisi, numquam obcaecati porro quasi quis quod recusandae repellat sed
                    soluta voluptate voluptatem? Ab ducimus eius labore numquam ratione repudiandae sint tempore vel?
                    Dolorum, recusandae, voluptatibus. Aliquid assumenda enim eum perferendis! Accusantium atque, aut
                    consequatur delectus dolorem dolorum ea earum eos error esse et ex exercitationem facere fugit, id
                    impedit ipsam iste labore laborum magnam modi nesciunt nisi omnis pariatur possimus quam quod quos
                    ratione saepe totam ullam unde vitae voluptatem? Accusamus adipisci aperiam asperiores aspernatur
                    blanditiis consequatur consequuntur debitis dolorem doloremque eaque, eius eos eum eveniet, fugiat
                    in iure laudantium nam non quaerat quos soluta, tempore veritatis voluptatum! Ad aut beatae, debitis
                    excepturi expedita, facere illo, ipsa odit optio sit tempora velit vitae! Asperiores corporis
                    debitis, eos est ex incidunt itaque laboriosam modi neque nesciunt nobis officia omnis placeat
                    repudiandae, saepe sed suscipit! A accusamus aspernatur atque commodi, dolorem dolores dolorum,
                    enim, eveniet illum ipsum iusto magni minus nemo obcaecati sint soluta tempora. Ab doloremque facere
                    modi perspiciatis quaerat qui sed totam ut voluptatum! Culpa doloremque porro rem!</p>

            </div>
            <Footer/>
        </div>
    );
}

export default Aferta;