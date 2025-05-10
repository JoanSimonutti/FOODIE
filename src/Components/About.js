import React from 'react';
import AboutBackground from '../Assets/about-background.png'
import AbourBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {

    return (
        <div className='about-section-container'>
            <div className='about-background-image-container'>
                <img src={AboutBackground} alt='' />
            </div>
            <div className='about-section-image-container'>
                <img src={AbourBackgroundImage} alt='' />
            </div>
            <div className='about-section-text-container'>
                <h1 className='primary-heading'>
                    Promovemos una alimentación equilibrada con comida saludable y deliciosa.
                </h1>
                <p className='primary-text'>
                    Te ofrecemos una alimentación equilibrada a través de platos saludables,
                    frescos y deliciosos, pensados para cuidar tu bienestar sin renunciar al sabor.
                </p>
                <p className='primary-text'>
                    Elegí salud, disfrutá el sabor.
                </p>
                <div className='about-buttons-container'>
                    <button className='secondary-button'>Más Info</button>
                    <button className='watch-video-button'>
                        {" "}
                        <BsFillPlayCircleFill />Mirar Video
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About