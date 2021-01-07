import React, { Fragment } from 'react';
import './index.css';


import Layout from './components/ui/layout';
import Hero from './components/Hero';
import Switch from './components/ui/Switch';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacto from './components/Contacto';





function App(props) {
  

  return (
    <Fragment>
      <Layout>
        <Switch />
        <Hero />
        <Skills />
        <Projects />
        <Contacto />
      </Layout>
    </Fragment>
  );
}

export default App;
