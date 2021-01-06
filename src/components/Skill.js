import React from 'react';
import styled from 'styled-components';
import { converter2 } from '../helper2';

import {sombraColor, sombraColorHover ,cardColor } from './ui/theme';

const Card = styled.div`
    background-color: ${cardColor};
    
    height: 200px;
    
    padding: 2rem;
    text-align: center;
    border-radius: 7px;
    box-shadow: 0 1rem 0.5rem ${sombraColor};
    overflow: hidden;
    margin: 0;

    transition: transform .5s, box-shadow 1s;
    &:hover {
        transform: translateY(-.9rem) scale(1.03);
        z-index: 3000;
        box-shadow: 0 1rem 1.2rem ${sombraColorHover};
    };
`;

const Name = styled.h1`
    font-size: clamp(1.5rem, 1.8rem, 2rem);
    max-width: 100%;

`;

const Experiencia = styled.p`
opacity: 60%;
`


const Skill = ({nombre , icono , experiencia}) => {
    console.log(icono);
    converter2(icono);
    console.log(icono);
    return ( 
        <Card>
            
                {icono[0]}
            
            <Name>{nombre}</Name>
            <Experiencia>{experiencia}</Experiencia>
            
        </Card>
     );
}
 
export default Skill;