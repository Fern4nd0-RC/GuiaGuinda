/**
 * NavBar Component
 *
 * Description:
 * A reusable navigation bar component that includes links to different
 * pages, a sidebar toggle, and a login/logout system with modal integration.
 *
 * Props: None
 *
 * Dependencies:
 * - React: Library for building UI components.
 * - react-router-dom: For navigation between pages.
 * - Swal (SweetAlert2): For interactive alerts.
 * - Local CSS file: '../Styles/navbar.css'.
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../Components/login2.0';
import Sidebar from '../Components/sidebar';
import Swal from 'sweetalert2';
import '../Styles/navbar.css';

const NavBar = () => {
  const navigate = useNavigate();

  // State variables for modal, sidebar, and login status
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check login status from localStorage
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // Toggles the login modal
  const toggleLoginModal = () => setLoginModalOpen(!isLoginModalOpen);

  // Toggles the sidebar
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  // Handles successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Persist login status
    setLoginModalOpen(false); // Close the modal
  };

  // Handles logout
  const handleLogout = () => {
    Swal.fire({
      title: 'Sesión cerrada',
      text: 'Adiós!',
      icon: 'success',
      confirmButtonText: 'Continuar',
      confirmButtonColor: '#3085d6',
    });
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Clear session from localStorage
    navigate('/'); // Redirect to home page
  };

  // Navigation helpers
  const navigateTo = (path) => navigate(path);

  return (
    <>
      {/* Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Login modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={toggleLoginModal}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Navigation bar */}
      <header className="header">
        {/* Sidebar toggle button */}
        <div className="icons">
          <i className="fas fa-bars" onClick={toggleSidebar}></i>
        </div>

        {/* Logo */}
        <div className="logo" onClick={() => navigateTo('/')}>
          GG
        </div>

        {/* Navigation links */}
        <nav className="nav">
          <a onClick={() => navigateTo('/tests')}>Tests</a>
          <a onClick={() => navigateTo('/tutos')}>Recursos</a>
          <a onClick={() => navigateTo('/schools')}>Escuelas</a>
        </nav>

        {/* User icons: login/logout */}
        <div className="icons">
          <i className="fas fa-search"></i>
          {isLoggedIn ? (
            <>
              <i className="fas fa-user" onClick={() => navigateTo('/user')}></i>
              <button className="logout-btn" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </>
          ) : (
            <i className="fas fa-user" onClick={toggleLoginModal}></i>
          )}
        </div>
      </header>

      {/* Titles section */}
      <section className="titles-n">
        <h2>Guía Guinda</h2>
      </section>
    </>
  );
};

export default NavBar;
