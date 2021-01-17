import React from 'react';
import Lottie from 'react-lottie';
import animationDataLight from '../images/light3.json';
import animationDataDark from '../images/dark.json';
import styled, { withTheme } from 'styled-components';

const Animacion = styled(Lottie)`

left:0;
    height: 70%;
        padding: 1rem;
        width: 80%;
        max-width: 80%;
        padding-right: 2rem;
    @media (min-width: 880px) {
        height: 70%;
        
    };
`;

const UncontrolledLottie = (props) => {
    const lightOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataLight,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const darkOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataDark,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return ( 
        <div>
        <Animacion options={props.theme.mode === 'light' ? lightOptions : darkOptions}
              
        />
      </div>
     );
}
 
export default withTheme(UncontrolledLottie);