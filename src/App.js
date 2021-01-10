import React, { Fragment, useRef } from 'react';
import './index.css';


import Layout from './components/ui/layout';
import Hero from './components/Hero';
import Switch from './components/ui/Switch';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Menu from './components/ui/Menu';




function App(props) {
  
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactoRef = useRef(null);


  return (
    <Fragment>
      <Layout>
        <Switch />
        <Menu refProp1={heroRef} refProp2={skillsRef} refProp3={projectsRef} refProp4={contactoRef}/>
        <Hero refProp={heroRef}/>
        <Skills refProp={skillsRef}/>
        <Projects refProp={projectsRef}/>
        <Contacto refProp={contactoRef}/>
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
