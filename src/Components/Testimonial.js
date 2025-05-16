import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return (
        <div className="work-section-wrapper" id="clientes">
            <div className="work-section-top">
                <h1 className="primary-heading">Ellos ya nos eligen</h1>
                <p className="primary-text">
                    Historias de personas que eligen FOODIE todos los días
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>
                    "Cuido cada cosa que consumo, ésta comida nutre, energiza y tiene un sabor increible! FOODIE es mi aliado perfecto"
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Mateo Simonutti, Atleta Olimpico</h2>
            </div>
        </div>
    );
};

export default Testimonial;