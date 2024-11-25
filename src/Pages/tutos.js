/**
 * Resources Page (tutos.js)
 *
 * Description:
 * A page showcasing various educational resources categorized by topics.
 * Each section represents a resource category with a description and a link
 * to explore more resources.
 *
 * Dependencies:
 * - React: For building UI components.
 * - react-router-dom: For navigation between pages.
 * - NavBar: Navigation bar component.
 * - Local CSS file: '../Styles/tutos.css'.
 */

import React from 'react';
import NavBar from '../Components/navbar';
import '../Styles/tutos.css';

const Tutos = () => {
  return (
    <div className="main-container-tutos">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="content-main-tutos">
        {/* Header Section */}
        <section className="resources-header">
          <h1>Recursos Educativos</h1>
          <p>
            Descubre una amplia variedad de recursos educativos organizados en categorías
            para facilitar tu aprendizaje. Desde tutoriales hasta herramientas prácticas,
            encuentra lo que necesitas para mejorar tus habilidades y conocimientos.
          </p>
        </section>

        {/* Categories Section */}
        <section className="resources-categories">
          <h2>Categorías de Recursos</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Matemáticas</h3>
              <p>Recursos para álgebra, geometría, cálculo, y mucho más.</p>
            </div>
            <div className="category-card">
              <h3>Ciencias</h3>
              <p>Material educativo para física, química, biología, y otras ciencias.</p>
            </div>
            <div className="category-card">
              <h3>Tecnología</h3>
              <p>Tutoriales de programación, desarrollo web, y herramientas tecnológicas.</p>
            </div>
            <div className="category-card">
              <h3>Idiomas</h3>
              <p>Guías y prácticas para aprender inglés, francés, y otros idiomas.</p>
            </div>
            <div className="category-card">
              <h3>Preparación para Exámenes</h3>
              <p>Simulacros, guías y materiales para tus pruebas académicas.</p>
            </div>
            <div className="category-card">
              <h3>Habilidades Blandas</h3>
              <p>Desarrolla liderazgo, comunicación efectiva, y trabajo en equipo.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tutos;
