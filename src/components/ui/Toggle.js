import React, {Fragment, useState, useEffect} from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import { useTheme } from '../context/ThemeContext';



const MaterialSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  border-radius: 20%;
  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  & > input:checked + .slider {
    background-color: #068cfa;
  }
  & > input:checked + .slider::before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: background-color 0.4s;
  border-radius: 20px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    border-radius: 50%;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: transform 0.4s;
  };
`;


const Toggle = () => {

        // get toggle context with `useTheme`
        const themeToggle = useTheme();

        const [dark, setDark] = useState(false);
        const [cambiarTema, setCambiarTema] = useState(false);

        
        
        const handleChange = e => {
          setDark(dark === false ? true : false)
          setCambiarTema(true)
          console.log(dark);
          
          themeToggle.switcher();


        };
        useEffect(() =>  {
           if(cambiarTema) {
             themeToggle.toggle();
             };
             setCambiarTema(false);
           
           
         }, [ dark ])
        

    return ( 
    <Fragment>
        <MaterialSwitch 
            
        >
          
            <input className="checkbox" checked={themeToggle.switchState.checked} type="checkbox" onChange={ handleChange}/>
            <Slider className="slider" />
        </MaterialSwitch>
        </Fragment>
     );
}
 
export default Toggle;