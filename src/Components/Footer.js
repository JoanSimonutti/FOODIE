import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";
/* import { FaFacebookF } from "react-icons/fa";*/
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper" id="footer">
            <div className="footer-section-one">
                <div className="footer-logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ cursor: 'pointer' }}>
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <span><a className="enlacefooter" href="https://www.linkedin.com/in/joansimonutti/" target="_blank"><SiLinkedin /></a></span>
                    <span><a className="enlacefooter" href="https://github.com/JoanSimonutti" target="_blank"><FaGithub /></a></span>
                    <span><a className="enlacefooter" href="https://theoldstorehouse.ie/" target="_blank"><TbWorldWww /></a></span>
                    <span><a className="enlacefooter" href="https://www.google.com/maps/dir//3+Crown+Alley,+Temple+Bar,+Dublin,+D02+CX67,+Ireland/@53.3186908,-6.420619,10.86z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48670e9cb4613089:0xa8e4636215b85741!2m2!1d-6.262646!2d53.345176?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank"><FiMapPin /></a></span>
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{ cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}>REGRESAR ARRIBA</span>
                </div>
                <div className="footer-section-columns">
                    <span>244-5333-7783</span>
                    <span>hola@foodie.com</span>
                    <span>Trabaja con nosotros</span>
                    <span>Términos y condiciones</span>
                </div>
                <div className="footer-section-columns">
                    <span></span>
                    <span></span>
                    <span>Políticas de privacidad</span>
                    <span>FOODIE © 2025</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;