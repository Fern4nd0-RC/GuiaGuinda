/**
 * Tests Page
 *
 * Description:
 * This page provides a variety of academic and personal tests for users to evaluate
 * their skills, interests, and personality traits. Each section introduces a specific test
 * and navigates to its respective page when clicked.
 *
 * Dependencies:
 * - React: For managing page components.
 * - react-router-dom: For navigation.
 * - NavBar: Navigation bar component.
 * - Local CSS file: '../Styles/tests.css'.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/navbar';
import '../Styles/tests.css';

const Test = () => {
  const navigate = useNavigate();

  // Navigation helpers
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="main-t">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="main-container-menu-t">
        <main className="main-content-t">
          {/* Header Section */}
          <section className="main-test-t">
            <h1>Tests</h1>
            <p>
              Bienvenidos a la sección de Tests de Guía Guinda. Aquí podrás poner a prueba
              tus conocimientos y habilidades en diversas áreas académicas. Encuentra una
              variedad de exámenes y cuestionarios diseñados para ayudarte a prepararte mejor
              y evaluar tu nivel de comprensión en los temas clave. ¡Comienza ahora y prepárate
              para tus futuros desafíos académicos!
            </p>
          </section>

          {/* Tests Sections */}
          <div className="test-sections">
            <div className="test-card" onClick={() => navigateTo('/interests')}>
              <h2>Test de Intereses Profesionales</h2>
              <p>
                Identifica las áreas que más te interesan, como ciencias, artes, tecnología, etc.
              </p>
            </div>
            <div className="test-card" onClick={() => navigateTo('/skills')}>
              <h2>Test de Habilidades</h2>
              <p>
                Evalúa habilidades específicas como matemáticas, creatividad y comunicación.
              </p>
            </div>
            <div className="test-card">
              <h2>Test de Personalidad</h2>
              <p>
                Descubre carreras que se alineen con tu personalidad según la teoría MBTI.
              </p>
            </div>
            <div className="test-card">
              <h2>Test de Aptitudes Cognitivas</h2>
              <p>
                Evalúa habilidades como razonamiento lógico, espacial y verbal.
              </p>
            </div>
            <div className="test-card">
              <h2>Test de Estilo de Aprendizaje</h2>
              <p>
                Descubre cómo aprendes mejor (visual, auditivo, kinestésico) y obtén sugerencias.
              </p>
            </div>
            <div className="test-card">
              <h2>Test de Preferencias Laborales</h2>
              <p>
                Conoce tus preferencias en el entorno laboral para elegir un campo adecuado.
              </p>
            </div>
            <div className="test-card">
              <h2>Test de Inteligencias Múltiples</h2>
              <p>
                Explora profesiones que se adapten a tus inteligencias según la teoría de Gardner.
              </p>
            </div>
          </div>
        </main>
      </div>

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

export default Test;
