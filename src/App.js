import React, { Fragment, useRef, lazy, Suspense, useState } from 'react';
import './index.css';


import Layout from './components/ui/layout';
import Hero from './components/Hero';
import Switch from './components/ui/Switch';
import Skills from './components/Skills';
import Projects from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/ui/Footer';
import Menu from './components/ui/Menu';
import LoadingScreen from './components/ui/LoadingScreen';




function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  
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
        <Skills refProp={skillsRef} />
        <Projects refProp={projectsRef}/>
        <Contacto refProp={contactoRef}/>
        <Footer />
        
        

        
       
      </Layout>
    </Fragment>
  );
}

export default App;
