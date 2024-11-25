import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/carousel.css'; // Puedes personalizar el CSS según tu necesidad

const Carrusel = () => {
  // Configuración del carrusel
  const settings = {
    dots: true, // Muestra los puntos de navegación en la parte inferior del carrusel
    infinite: true, // Hace que el carrusel sea infinito
    speed: 500, // Velocidad de la transición entre slides
    slidesToShow: 1, // Número de slides a mostrar
    slidesToScroll: 1, // Número de slides a mover al hacer clic
    autoplay: true, // Activa la reproducción automática
    autoplaySpeed: 4000, // Intervalo de tiempo entre slides en milisegundos
    arrows: true, // Muestra las flechas de navegación a los lados
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="ola.png" alt="Estudiantes Nuevo Ingreso" className="carousel-image" />
        </div>
        <div>
          <img src="" alt="Oportunidades Educativas" className="carousel-image" />
        </div>
        <div>
          <img src="" alt="Instalaciones Modernas" className="carousel-image" />
        </div>
        {/* Añade más slides según necesites */}
      </Slider>
    </div>
  );
};

export default Carrusel;
