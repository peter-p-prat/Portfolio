import React from 'react';

import styled, { withTheme } from 'styled-components';

import { headerBackground, headerText, buttonBackgroundColor, buttonTextColor } from './theme';
import { useTheme } from '../context/ThemeContext';

    

    const Encabezado = styled.div`
    position: sticky;
    top:0;
    margin:0;
    padding: 0 1rem;
    height: 8vh;
    color: ${headerText};
    background-color: ${headerBackground};
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

    const Logo = styled.p`
        width: 15rem;
        font-family:'shrimpregular' !important;
        -webkit-text-stroke-width: 0.3px;
        -webkit-text-stroke-color: ${headerText};
        color:${headerBackground};
    `

    const Button = styled.button`
        width:10rem;
        height: 2rem;
        margin: 0.5rem 0;
        background: ${buttonBackgroundColor};
        color: ${buttonTextColor};
        border: none;
        border-radius: 0.3em;
        box-shadow: none;
        cursor: pointer;
        font-size: clamp(0.5rem, 0.8rem, 2rem);
        padding: 0.5em;
        white-space: nowrap;

    `;

const Header = (props) => {
    
    
    // get toggle context with `useTheme`
    const themeToggle = useTheme();
    
    return ( 
        <Encabezado>
                <Logo>PEDRO PEIRANO PRAT</Logo>
                <Button 
                    onClick={() => themeToggle.toggle()}
                >
                    {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Button>
        </Encabezado>
     );
}
 
export default withTheme(Header);