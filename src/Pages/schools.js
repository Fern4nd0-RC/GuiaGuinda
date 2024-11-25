import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/navbar';
import '../Styles/schools.css';

const schools = [
  { name: "CICS Unidad Milpa Alta", logo: "/Escudos/cics_uma.png" },
  { name: "CICS Unidad Santo Tomás", logo: "/Escudos/cics_ust.png" },
  { name: "ENBA", logo: "/Escudos/enba.png" },
  { name: "ENCB Santo Tomás", logo: "/Escudos/encb.png" },
  { name: "ENCB Zacatenco", logo: "/Escudos/encb.png" },
  { name: "ESCA Santo Tomás", logo: "/Escudos/esca.png" },
  { name: "ESCA Tepepan", logo: "/Escudos/esca_tepepan.PNG" },
  { name: "ESCOM", logo: "https://via.placeholder.com/100" },
  { name: "ESE", logo: "https://via.placeholder.com/100" },
  { name: "ESEO", logo: "https://via.placeholder.com/100" },
  { name: "ESFM", logo: "https://via.placeholder.com/100" },
  { name: "ESIA Tecamachalco", logo: "https://via.placeholder.com/100" },
  { name: "ESIA Ticomán", logo: "https://via.placeholder.com/100" },
  { name: "ESIA Zacatenco", logo: "https://via.placeholder.com/100" },
  { name: "ESIME Azcapotzalco", logo: "https://via.placeholder.com/100" },
  { name: "ESIME Culhuacán", logo: "https://via.placeholder.com/100" },
  { name: "ESIME Ticomán", logo: "https://via.placeholder.com/100" },
  { name: "ESIME Zacatenco", logo: "https://via.placeholder.com/100" },
  { name: "ESIQIE", logo: "https://via.placeholder.com/100" },
  { name: "ESIT", logo: "https://via.placeholder.com/100" },
  { name: "ESIT", logo: "https://via.placeholder.com/100" },
  { name: "ESM", logo: "https://via.placeholder.com/100" },
  { name: "EST", logo: "https://via.placeholder.com/100" },
  { name: "UPIBI", logo: "https://via.placeholder.com/100" },
  { name: "UPIICSA", logo: "https://via.placeholder.com/100" },
  { name: "UPIIG", logo: "https://via.placeholder.com/100" },
  { name: "UPIIP", logo: "https://via.placeholder.com/100" },
  { name: "UPIITA", logo: "https://via.placeholder.com/100" },
  { name: "UPIIZ", logo: "https://via.placeholder.com/100" },
  { name: "UPIEM", logo: "https://via.placeholder.com/100" },
  { name: "UPIIH", logo: "https://via.placeholder.com/100" },
  { name: "UPIIT", logo: "https://via.placeholder.com/100" },
  { name: "UPIIC", logo: "https://via.placeholder.com/100" },
];

const School = () => {
  return (
    <div className="main-container-menu">
      <NavBar />

      <main className="content-main">
      <section className="resources-header">
          <h1>Escuelas</h1>
          <p>
            Dentro de esta sección podras encontrar informacion relevante acerda de
            cada una de las 30 escuelas de nivel superior que conforman al
            Instituo Politecnico Nacional.
          </p>
        </section>
        <section id="Schools" className="section">
          <div className="school-grid">
            {schools.map((school, index) => (
              <div key={index} className="school-card">
                <img src={school.logo} alt={`Logo de ${school.name}`} className="school-logo" />
                <h3 className="school-name">{school.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default School;
