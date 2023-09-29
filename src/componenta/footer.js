import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className="footer">
            <div className="left">
                <p>Bizning Ijtimoiy Tarmoqlar:</p>
                <ul className="wrapper">
                    <li>
                        <a className="icon facebook" href="#">
                            <span className="tooltip">Facebook</span>
                            <span>
                                            <i className="fab fa-facebook-f"></i>
                                        </span>
                        </a>
                    </li>
                    <li>
                        <a className="icon twitter" href="#">
                            <span className="tooltip">Twitter</span>
                            <span><i className="fab fa-twitter"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="icon instagram" target="_blank"
                           href="https://instagram.com/tdtu.offical?igshid=YmMyMTA2M2Y=">
                            <span className="tooltip">Instagram</span>
                            <span><i className="fab fa-instagram"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="icon youtube" target="_blank"
                           href="https://www.youtube.com/channel/UCVeUzoJ6466s6yh4LPPS-zA">
                            <span className="tooltip">Youtube</span>
                            <span><i className="fab fa-youtube"></i></span>
                        </a>

                    </li>
                    <li>
                        <a className="icon telegram" target="_blank"
                           href="https://t.me/ToshDTU_Matbuot_Xizmati">
                            <span className="tooltip">Telegram</span>
                            <span><i className="fab fa-telegram"></i></span>
                        </a>
                    </li>

                </ul>
            </div>
            <div className="righte">
                <p>
                    RTTM-2023
                </p>
            </div>

        </div>
    );
}

export default Footer;