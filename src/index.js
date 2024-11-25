import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Styles/index.css';  // Estilos globales
import App from './App';  // Componente App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Monta la aplicación en el div con id "root"
);
