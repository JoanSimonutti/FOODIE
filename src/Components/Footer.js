import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
/* import { FaFacebookF } from "react-icons/fa";*/
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper">
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
                    <span>Qualtiy</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                </div>
                <div className="footer-section-columns">
                    <span>244-5333-7783</span>
                    <span>hello@foodie.com</span>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="footer-section-columns">
                    <span><a className="enlacefooter" href="https://www.linkedin.com/in/joansimonutti/" target="_blank">Joan Simonutti</a></span>
                    <span>FOODIE © 2025</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;