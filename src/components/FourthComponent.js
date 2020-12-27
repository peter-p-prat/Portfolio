import React, {Fragment} from 'react';
import { useTheme } from './context/ThemeContext';
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor } from './ui/theme';
import theme from 'styled-theming';
  
    //Para dar caracteristicas puntuales dentro de un componente segun el tema
    //utilizar theme from 'styled-theming'
    const textColor = theme('mode', {
      light: 'black',
      dark: 'white'
  });
  
  const colorPanel = theme('mode', {
      light: 'orange',
      dark: 'red'
  });

  const CuartoComponente = styled.div`
    height: 100vh;
    p {
        color: ${textColor};
        background-color: ${colorPanel};
        
    }
      
  `;

    
  const Button = styled.button`
  width:10rem;
  height: 2rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  cursor: pointer;
  font-size: clamp(0.5rem, 0.8rem, 2rem);
  padding: 0.5em;
  white-space: nowrap;

  `;
  const Ilu = styled.div`;
  background-size:100% ;
  height: 300px;
  width: 300px;

  `

const FourthComponent = (props) => {


    // get toggle context with `useTheme`
    const themeToggle = useTheme();
   
    return ( 
      <Fragment>
        <CuartoComponente>
            <p>FourthComponent</p>
            <Button 
              onClick={() => themeToggle.toggle()}
            >
              {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </Button>
        </CuartoComponente>
          <h1>Un h1</h1>
        <p>Un parrafo</p>
        
      </Fragment>
     );
}
 
export default withTheme(FourthComponent);