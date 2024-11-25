/**
 * Main Page
 *
 * Description:
 * The main landing page for Guía Guinda. It includes a navigation bar,
 * a carousel, and a footer with links and social media icons.
 *
 * Dependencies:
 * - React: For managing the page structure.
 * - react-router-dom: For navigation.
 * - NavBar: Navigation bar component.
 * - Carrusel: Carousel component.
 * - Local CSS file: '../Styles/main.css'.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/navbar';
import Carrusel from '../Components/carousel';
import '../Styles/main.css';

const Main = () => {
  const navigate = useNavigate();

  const goToTests = () => navigate('/tests');
  const goToResources = () => navigate('/resources');

  return (
    <div className="main_container">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Bienvenido a Guía Guinda</h1>
          <p>
            La plataforma ideal para ayudarte en tu camino académico. Explora nuestras
            herramientas educativas, recursos personalizados y mucho más.
          </p>
          <div className="hero-buttons">
            <button className="cta-button" onClick={goToTests}>Explorar Tests</button>
            <button className="cta-button" onClick={goToResources}>Recursos Educativos</button>
          </div>
        </section>

        {/* Carousel Component */}
        <Carrusel />

        {/* Features Section */}
        <section className="features-section">
          <h2>Lo que ofrecemos</h2>
          <div className="features">
            <div className="feature-card">
              <i className="fas fa-book"></i>
              <h3>Recursos Personalizados</h3>
              <p>
                Encuentra contenido educativo adaptado a tus necesidades y objetivos.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>Orientación Académica</h3>
              <p>
                Recibe asesoramiento para elegir la mejor carrera y escuela para ti.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-calendar-alt"></i>
              <h3>Planificación</h3>
              <p>
                Organiza tus metas con herramientas diseñadas para el éxito.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Guía Guinda. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/contact">Contacto</a>
          <a href="/terms">Términos de Servicio</a>
          <a href="/privacy">Política de Privacidad</a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Main;
