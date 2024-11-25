import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/navbar';


const Intereses = () => {
    return (
        <div className='main-container-menu'>
            <NavBar />

            <main className='content-main'>
            
            <section id='Interests' className='section'>
                <h1>Test de Intereses Profesionales</h1>
            </section>

            </main>

        </div>
    );
};
export default Intereses;