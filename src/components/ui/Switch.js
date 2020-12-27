import React, {Fragment, useState, useEffect} from 'react';
import styled, {withTheme} from 'styled-components';

import { iconClosedColor, iconOpenedColor, switchToggle, fondoColorClaro } from './theme';
import moon from '../../images/moon.svg';
import { useTheme } from '../context/ThemeContext';

const Container = styled.div`
    width: 80px;
    height: 30px;
    border-radius: 50px;
    transition: all 0.5s;
    background: ${iconOpenedColor};
    position: fixed;
    top: 2.5rem;
    left: 2rem;
    z-index: 2000;
    
`;

const Knob = styled.div`
    transition: all 0.9s;
    cursor: pointer;
    border-radius: 17.5px;
    height: 35px;
    width: 35px;
    background: ${fondoColorClaro};
    background-image: ${moon};
    box-shadow: 0px 0px 5px #c8c8c8;
    position: absolute;
    top: -3px;
    left: ${switchToggle};
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Moon = styled.svg`
    height: 20px;
`;
const Sun = styled.svg`
    height: 20px;
`;
const Switch = (props) => {

    const [isDark , SetIsDark ] = useState(false); 
    // get toggle context with `useTheme`
    const themeToggle = useTheme();

    const handleClick = () => {
        themeToggle.toggle();
        
    };
    return ( 
        <Container>
            <Knob onClick={handleClick}>
            {props.theme.mode === 'light' ?
                <Moon xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'><title>Moon</title><path d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/></Moon> 
                : <Sun xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'><title>Sunny</title><path fill='none' stroke='currentColor' strokeLinecap='round' stroke-miterlimit='10' strokeWidth='32' d='M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94'/><circle cx='256' cy='256' r='80' fill='none' stroke='currentColor' strokeLinecap='round' stroke-miterlimit='10' strokeWidth='32'/></Sun>
             }
            
            </Knob>
        </Container>
     );
}
 
export default withTheme(Switch);