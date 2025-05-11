import React from 'react';
import Navbar from './Navbar';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {


    return (
        <div className='home-container'>
            <Navbar />
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    {<img src={BannerBackground} alt="" />}
                </div>
                <div className='home-text-section'>
                    <h1 className='primary-heading'>
                        Tu comida favorita, saludable y lista para disfrutar
                    </h1>
                    <p className='primary-text'>
                        Nuestros chefs seleccionan con dedicación ingredientes frescos
                        y de alta calidad para que disfrutes una alimentación sana, práctica y deliciosa
                    </p>
                    <button className='secondary-button'>
                        IR A LA TIENDA <FiArrowRight />
                    </button>
                </div>
                <div className='home-image-container'>
                    <img src={BannerImage} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Home