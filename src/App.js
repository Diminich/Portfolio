import React from 'react';
import './App.css';
import Header from './Headers/Header';
import Main from './Mains/Main';
import Skill from './Skills/Skill';
import Projects from './MyProject/Projects';
import DistantProjects from './DistantProject/DistantProjects';
import Contacts from './Contacts/Contact';
import Footer from './Footers/Footer';

function App() {
  return (
    <div className="App">
      <div className="portfolio">
      <Header />
      <Main />
      <Skill />
      <Projects />
      <DistantProjects />
      <Contacts />
      <Footer />
      </div>
    </div>
  );
}

export default App;
