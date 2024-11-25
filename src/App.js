import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../src/Pages/main';
import About from '../src/Pages/about';
import Menu from './Pages/menu';
import User from '../src/Pages/user';
import Tests from '../src/Pages/tests';
import School from '../src/Pages/schools';
import Tutos from '../src/Pages/tutos';
import Interests from '../src/Tests/interests';

const App = () => {
  return (
    <Router>
      <Routes>

        {/*RUTAS DE LAS PAGINAS*/}
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/tests" element={<Tests />}/>
        <Route path="/schools" element={<School />}/>
        <Route path="/tutos" element={<Tutos/> }/>
        <Route path="/user" element={<User/>}/>

        {/*RUTAS DE LOS TESTS*/}
        <Route path="/interests" element={<Interests/>}/>

      </Routes>
    </Router>
  );
};

export default App;
