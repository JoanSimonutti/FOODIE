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
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper" id="footer">
            <div className="footer-section-one">
                <div className="footer-logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ cursor: 'pointer' }}>
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <span></span>
                    <span><a className="enlacefooter" href="https://www.linkedin.com/in/joansimonutti/" target="_blank"><SiLinkedin /></a></span>
                    <span><a className="enlacefooter" href="https://github.com/JoanSimonutti" target="_blank"><FaGithub /></a></span>
                    <span><a className="enlacefooter" href="https://www.google.com/maps/place/BrewDog+Outpost+Dublin/@53.3452832,-6.238385,16.24z/data=!4m6!3m5!1s0x48670f74db7ba8af:0x707a602c5aaf364a!8m2!3d53.3444615!4d-6.2309553!16s%2Fg%2F11hzw5tj0h?hl=en&entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank"><FiMapPin /></a></span>
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="footer-section-columns">
                    <span>244-5333-7783</span>
                    <span>hola@foodie.com</span>
                    <span>Trabaja con nosotros</span>
                    <span>FOODIE © 2025</span>
                </div>
                <div className="footer-section-columns">
                    <span className="enlacefooter" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '75px' }}><FaRegArrowAltCircleUp /></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;