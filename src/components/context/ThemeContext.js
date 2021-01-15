import React, { useState, useContext, createContext, useEffect } from "react";
import styled, { ThemeProvider } from 'styled-components';
import theme from "styled-theming";
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
    
    //state para local storage
    const [storedMode, setStoredMode] = useState({
      mode: localStorage.getItem('mode')
    });
    

    // default mode is set to `light`
    const [themeState, setThemeState] = useState({
      mode: "light"
    });

    

    
    



    // toggle() now switches `mode` between light and dark, and updates themeState
    const toggle = () => {
        const mode = (themeState.mode === 'light' 
                        ? `dark` 
                        : `light`);

        localStorage.setItem('mode', mode);
        setThemeState({ mode: mode });
        setStoredMode({ mode: mode });
 
        
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
          storedMode,
          themeState,
          toggle: toggle 
        }}
       >
         <ThemeProvider
           theme={storedMode.mode === null ? {mode: themeState.mode} : {
             mode: storedMode.mode
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