import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
/* import { FaFacebookF } from "react-icons/fa";*/
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper" id="footer">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <SiLinkedin />
                    <BsTwitter />
                    <FaInstagram />
                </div>
            </div>
            <div className="footer-section-two">
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
                    <span>FOODIE Internacional</span>
                </div>
                <div className="footer-section-columns">
                    <span></span>
                    <span></span>
                    <span><a className="enlacefooter" href="https://github.com/JoanSimonutti" target="_blank">JOAN SIMONUTTI</a></span>
                    <span>FOODIE © 2025</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;