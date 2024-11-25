/**
 * LoginModal Component
 *
 * Description:
 * A reusable modal component for user login. Handles input validation,
 * user authentication (static or via API), and session management.
 *
 * Props:
 * - isOpen (boolean): Controls the visibility of the modal.
 * - onRequestClose (function): Closes the modal when triggered.
 * - onLoginSuccess (function): Callback triggered upon successful login.
 *
 * Dependencies:
 * - React: For managing component state and lifecycle.
 * - react-router-dom: For navigation to different routes.
 * - SweetAlert2: For interactive alerts.
 * - Modal (react-modal): For modal implementation.
 * - Local CSS file: '../Styles/login2.0.css'.
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import '../Styles/login2.0.css';

Modal.setAppElement('#root');

const LoginModal = ({ isOpen, onRequestClose, onLoginSuccess }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Handles login form submission.
   * Validates input fields and checks credentials.
   * @param {Event} e - Form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate empty fields
    if (!user || !password) {
      Swal.fire({
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // Validate credentials (example: static check)
    if (user === 'paco' && password === 'ola') {
      Swal.fire({
        title: 'Bienvenido',
        text: `Hola, ${user}!`,
        icon: 'success',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#3085d6',
      }).then(() => {
        // Call success callback and persist session
        onLoginSuccess();
        localStorage.setItem('isLoggedIn', 'true'); // Save session
        localStorage.setItem('user', user);
        onRequestClose(); // Close modal
        navigate('/'); // Redirect to home or profile page
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Usuario o contraseña incorrectos.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="login-modal"
      overlayClassName="login-modal-overlay"
    >
      <div className="modal-content">
        <h2>Bienvenido</h2>

        {/* Username input */}
        <input
          type="text"
          placeholder="Usuario"
          id="user"
          className="input-email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Contraseña"
          id="password"
          className="input-email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Submit button */}
        <button className="btn-primary" onClick={handleSubmit}>
          Iniciar Sesión
        </button>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google login button */}
        <button className="btn-social google">
          <i className="fab fa-google"></i> Conectar con Google
        </button>

        {/* Registration link */}
        <p className="link">
          No tienes una cuenta? <span>Registrate.</span>
        </p>
      </div>
    </Modal>
  );
};

export default LoginModal;
