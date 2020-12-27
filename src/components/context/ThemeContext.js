import React, { useState, useContext, createContext } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from '../ui/theme';

// define our toggle context, with a default empty toggle function
const ThemeToggleContext = createContext({
    toggle: () => {},
    switcher: () => {}
  });

  // define exportable useContext hook object
  export const useTheme = () => useContext(ThemeToggleContext);
  

  // define MyThemeProvider
  export const MyThemeProvider = ({ children }) => {

    // default mode is set to `light`
    const [themeState, setThemeState] = useState({
        mode: 'light'
    });

    // default mode is set to `light`
    const [switchState, setSwitchState] = useState({
      checked : false
    });

    // toggle() now switches `mode` between light and dark, and updates themeState
    const toggle = () => {
        const mode = (themeState.mode === 'light' 
                        ? `dark` 
                        : `light`);
        
        setThemeState({ mode: mode });
    };

    // switcher() now switches checked between true and false, and updates switchState
    const switcher = () => {
      const checked = (switchState.checked === false 
                      ? true 
                      : false);
      
      setSwitchState({ checked : checked });
  };

    // Wrapper providing some page styling based on theme
    const Wrapper = styled.div`
       background-color: ${backgroundColor};
       color: ${textColor};
    `;



    // render both contexts, then Wrapper, then children
    return (
       <ThemeToggleContext.Provider
         value={{ 
          themeState,
          switchState,
          setSwitchState,
          toggle: toggle, 
          switcher: switcher  
        }}
       >
         <ThemeProvider
           theme={{
             mode: themeState.mode
           }}
         >
            <Wrapper>
              {children}
            </Wrapper>
         </ThemeProvider>
       </ThemeToggleContext.Provider>
    );
 };
 export default ThemeProvider;