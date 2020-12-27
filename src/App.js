import React, { Fragment, useState } from 'react';
import './index.css';

import FourthComponent from './components/FourthComponent';

import Layout from './components/ui/layout';
import Hero from './components/Hero';
import Toggle from './components/ui/Toggle';
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
