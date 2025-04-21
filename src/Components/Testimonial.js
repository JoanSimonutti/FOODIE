import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Clientes</p>
                <h1 className="primary-heading">Ellos ya nos eligen</h1>
                <p className="primary-text">
                    Historias reales de personas que disfrutan comer FOODIE todos los días.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>
                    "Como atleta profesional, cuido cada cosa que consumo.
                    Esta comida me da la energía y nutrición que necesito,
                    sin renunciar al sabor. Es mi aliado fuera del entrenamiento."
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Lucas, triatleta profesional.</h2>
            </div>
        </div>
    );
};

export default Testimonial;