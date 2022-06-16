import React, { useState } from 'react';
import 'bootstrap';
import Home from '../routes/home'; 
import mainImage from '../images/background.jpg';
import AboutMe from '../routes/aboutMe';
import Projects from '../routes/myProjects';
import Resume from '../routes/myResume';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { findByLabelText } from '@testing-library/react';

// Background image for main part of page.
const mainStyle = {
  backgroundImage: `url(${mainImage})`,
  height: 1500,
  width: '1vp',
  display: 'flex',
  justifyContent: 'center' 
}

const Main = () => {
  return (
    <main style={mainStyle}>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />}/>
            <Route path="/resume" element={<Resume />} />
          

        </Routes>
    </main>
  )
}

export default Main;