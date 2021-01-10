import React, { Fragment } from "react";
import { createGlobalStyle } from 'styled-components';

import { h1Color, h2Color, h3Color, linksColor , ResaltadoTranslucido ,buttonBackgroundColor, buttonTextColor, h1FondoColor, textoFondoColor } from './theme';

import Menu from './Menu';
import Footer from "../Footer";


const GlobalStyle = createGlobalStyle`
    :root {
        --colorOscuro: #526d85;
        --colorClaro: #768fa6;
    };
    *::-moz-selection { /* Code for Firefox */
        background: ${ResaltadoTranslucido};
    };

    *::selection {
        background: ${ResaltadoTranslucido};
    };
    * {
    outline: none;
    }
    *:focus {
    outline: none; 
    }
    h1, h2, h3 {
        //font-family: 'Rubik', sans-serif;
        font-family: 'Playfair Display', serif;
    };
    
    h1 {
        color: ${h1Color};
        
    };
    h1.fondoColor {
            color: ${h1FondoColor}
        }
    h2 {
        color:${ h2Color};
    };
    h3 {
        color: ${h3Color};
    };
    p {
        color: ${h2Color};
        
    };
    p.fondoColor {
            color: ${textoFondoColor}
    };
    a {
        
    };
    button {
        color: ${buttonTextColor};
        background: ${buttonBackgroundColor};
    };



    a, p, textarea, input, button {
        font-family: 'Open Sans', sans-serif;
    };
`;

const Layout = (props) => {


    return ( 
        <Fragment>
            <GlobalStyle />
            
            
            
            {props.children}
          
        </Fragment>
     );
}
 
export default Layout;

