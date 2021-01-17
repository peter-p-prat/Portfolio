import React from 'react';
import styled, {withTheme} from 'styled-components';
import { converter2 } from '../helper2';
import { converter3 } from '../helper3';

import {sombraColor, sombraColorHover ,cardColor } from './ui/theme';

const Card = styled.div`
    background-color: ${cardColor};
    
    height: 200px;
    
    padding: 2rem;
    text-align: center;
    border-radius: 7px;
    /* box-shadow:0 1rem 0.5rem $ {sombraColor}; */
    overflow: hidden;
    margin: 0;
    padding-top:3rem;
    transition: transform .5s, box-shadow 1s;
    &:hover {
        transform:  translateY(-.9rem) scale(1.03);
        z-index: 3000;
        /* box-shadow:0 1rem 1.2rem $ {sombraColorHover} ; */
    };
`;

const Name = styled.h1`
    font-size: clamp(1rem, 2vw, 1.3rem);
    /* font-size: 2vw; */
    max-width: 100%;
    @media(max-width:1200px){
        font-size: clamp(1.3rem, 2vw, 1.5rem);
    }

`;
const Tool = styled.div`
    margin-top:2rem;

`;

const Experiencia = styled.p`
opacity: 60%;
`


const Skill = ({theme, nombre , icono , experiencia, animate}) => {
    if (icono[0] === "next") {
        theme.mode === 'dark' ? converter3(icono) : converter2(icono)
    } else { 
        converter2(icono);
    }
    
    return ( 
        <Card animate={animate}>
            {!experiencia && <Tool> </Tool>}
                {icono[0]}
            
            <Name>{nombre}</Name>
            
            <Experiencia>{experiencia}</Experiencia>
            
        </Card>
     );
}
 
export default withTheme(Skill);