/**
 * User Page with Completed Courses
 *
 * Description:
 * Displays user information and allows editing their profile.
 * Includes a calendar, a list of upcoming events, and a completed courses section.
 *
 * Dependencies:
 * - React: For managing state and rendering components.
 * - NavBar: Navigation bar component.
 * - React Calendar: For displaying a calendar.
 * - Local CSS file: '../Styles/user.css'.
 */

import React, { useState } from "react";
import NavBar from "../Components/navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Styles/user.css";

const UserPage = () => {
  const [user, setUser] = useState({
    name: "Paco Posada",
    email: "paco.posada@gmail.com",
    avatar: "https://via.placeholder.com/150", // Default avatar
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: user.name, email: user.email });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events] = useState([
    { date: "2024-12-01", event: "Convocatoria de exámenes" },
    { date: "2024-12-10", event: "Seminario de tecnología" },
    { date: "2024-12-15", event: "Cierre de inscripciones" },
  ]);

  const [completedCourses] = useState([
    {
      title: "Curso de React Básico",
      description: "Aprende los fundamentos de React, uno de los frameworks más populares.",
      dateCompleted: "2024-11-10",
    },
    {
      title: "Curso de JavaScript Avanzado",
      description: "Domina JavaScript y sus conceptos avanzados para proyectos complejos.",
      dateCompleted: "2024-10-20",
    },
    {
      title: "Curso de Diseño UX/UI",
      description: "Conoce los principios del diseño centrado en el usuario.",
      dateCompleted: "2024-09-15",
    },
  ]);

  // Toggle between editing and viewing profile
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save changes to the profile
  const handleSave = () => {
    setUser({ ...user, name: formData.name, email: formData.email });
    setIsEditing(false);
  };

  // Handle calendar date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Filter events based on the selected date
  const filteredEvents = events.filter(
    (event) => event.date === selectedDate.toISOString().split("T")[0]
  );

  return (
    <div className="user-container">
      <NavBar />
      <main className="user-main">
        {/* Left Column: Profile Section */}
        <section className="profile-section">
          <img src={user.avatar} alt="Avatar" className="user-avatar" />
          {!isEditing ? (
            <>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <button className="user-button" onClick={handleEditToggle}>
                Editar Perfil
              </button>
            </>
          ) : (
            <div className="user-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Nombre"
                className="user-input"
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Correo"
                className="user-input"
                onChange={handleInputChange}
              />
              <label className="upload-label">
                Cambiar Foto de Perfil
                <input
                  type="file"
                  accept="image/*"
                  className="user-file-input"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setUser((prev) => ({ ...prev, avatar: e.target.result }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
              <button className="user-button" onClick={handleSave}>
                Guardar
              </button>
              <button className="user-button-secondary" onClick={handleEditToggle}>
                Cancelar
              </button>
            </div>
          )}
        </section>

        {/* Right Column: Calendar and Events */}
        <section className="info-section">
          <div className="calendar-container">
            <h3>Calendario</h3>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="calendar"
            />
            <p>
              Fecha Seleccionada:{" "}
              <span className="selected-date">{selectedDate.toLocaleDateString()}</span>
            </p>
          </div>
          <div className="events-container">
            <h3>Eventos Próximos</h3>
            {filteredEvents.length > 0 ? (
              <ul>
                {filteredEvents.map((event, index) => (
                  <li key={index}>{event.event}</li>
                ))}
              </ul>
            ) : (
              <p>No hay eventos para la fecha seleccionada.</p>
            )}
          </div>
        </section>

        {/* Completed Courses Section */}
        <section className="courses-section">
          <h3>Cursos Completados</h3>
          {completedCourses.length > 0 ? (
            <div className="courses-list">
              {completedCourses.map((course, index) => (
                <div key={index} className="course-card">
                  <h4>{course.title}</h4>
                  <p>{course.description}</p>
                  <p>
                    <strong>Fecha de finalización:</strong> {course.dateCompleted}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>Aún no has completado ningún curso.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default UserPage;
