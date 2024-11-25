/**
 * About Page
 *
 * Description:
 * The "About" page provides an overview of Guía Guinda, highlighting its purpose,
 * features, and benefits. It includes a call-to-action to return to the homepage.
 *
 * Dependencies:
 * - React: For managing component state and structure.
 * - react-router-dom: For navigation between pages.
 * - Local CSS file: '../Styles/about.css'.
 * - NavBar: Navigation bar component.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/about.css';
import NavBar from '../Components/navbar';

const About = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="main-container-about">
      {/* Navigation Bar */}
      <NavBar />

      <main className="content-about">
        {/* Text Section */}
        <section className="text-section-about">
          <h1>¿Qué es Guía Guinda?</h1>
          <p>
            Guía Guinda es tu compañero ideal para orientarte en tus metas académicas
            y personales. Aquí encontrarás herramientas personalizadas, recursos educativos,
            y la información más relevante para facilitar tu camino al éxito.
          </p>
          <ul className="features-list">
            <li><i className="fas fa-book"></i> Recursos educativos personalizados.</li>
            <li><i className="fas fa-map-marker-alt"></i> Orientación sobre escuelas y carreras.</li>
            <li><i className="fas fa-tasks"></i> Planificación efectiva para tus metas.</li>
          </ul>
          <button className="cta-button-about" onClick={goToMain}>
            Volver al Inicio
          </button>
        </section>
      </main>
    </div>
  );
};

export default About;
