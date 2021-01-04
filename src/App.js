import React, { Fragment } from 'react';
import './index.css';


import Layout from './components/ui/layout';
import Hero from './components/Hero';
import Switch from './components/ui/Switch';
import Skills from './components/Skills';
import Projects from './components/Projects';





function App(props) {
  

  return (
    <Fragment>
      <Layout>
        <Switch />
        <Hero />
        <Skills />
        
        <Projects />
      </Layout>
    </Fragment>
  );
}

export default App;
