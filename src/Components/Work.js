import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Elegís tus platos",
      text: "Desde nuestra carta saludable, seleccionás lo que más te guste: comidas frescas, nutritivas y llenas de sabor.",
    },
    {
      image: ChooseMeals,
      title: "Magia",
      text: "Lavamos, cortamos, marinamos y cocinamos con ingredientes reales. Sin aditivos, sin ultraprocesados.",
    },
    {
      image: DeliveryMeals,
      title: "Lo recibís en casa",
      text: "Pasás a retirarlo o lo enviamos a tu puerta. Siempre caliente, fresco y listo para disfrutar.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">¿Cómo funciona?</h1>
        <p className="primary-text">
          Descubrí lo fácil que es comer saludable: elegís,
          preparamos por vos y disfrutás platos frescos, ricos y nutritivos.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;