/**
 * Sidebar Component
 *
 * Description:
 * A collapsible sidebar for navigation. Includes links to different sections
 * of the page and a toggle button to open/close the sidebar.
 *
 * Props:
 * - isOpen (boolean): Controls whether the sidebar is visible.
 * - toggleSidebar (function): Toggles the visibility of the sidebar.
 *
 * Dependencies:
 * - React: Library for building UI components.
 * - react-router-dom: For navigation between routes.
 * - Local CSS file: '../Styles/sidebar.css'.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  /**
   * Navigates to the About page.
   */
  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Close Button */}
      <button className="close-btn" onClick={toggleSidebar}>
        ✖
      </button>

      {/* Navigation Links */}
      <ul>
        <li>
          <a href="#home" onClick={toggleSidebar}>Inicio</a>
        </li>
        <li>
          <a href="#services" onClick={toggleSidebar}>Servicios</a>
        </li>
        <li>
          <a onClick={() => { goToAbout(); toggleSidebar(); }}>Sobre nosotros</a>
        </li>
        <li>
          <a href="#contact" onClick={toggleSidebar}>Contacto</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
