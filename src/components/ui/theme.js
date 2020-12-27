import theme from 'styled-theming';

  //Colores
  const h1Light = "#4e4e4e";
  const h2Light = "#636363";
  const h3Light = "#656565";
  const textoLight = "#757575";
  const linksLight = "#39DBE2";

   //Colores Dark
   const h1Dark = "#ECECEC";
   const h2Dark = "#F3F3F3";
   const h3Dark = "#F5F5F5";
   const textoDark = "#E8E8E8";
   const linksDark = "#39DBE2";
   
   //Colores
  

   const rosaOscuro = '#FFD6E8';
   const rosaClaro = '#ffe6f1';

   const azulOscuro = '#08131d';
   const azulClaro = '#1c2e3e';

export const fondoColorOscuro = '#526d85';
export const fondoColorClaro = '#768fa6';

export const sombraColor = theme('mode', {
  light: "#4e4e4e14",
  dark: "#08131d14"
});
export const sombraColorHover = theme('mode', {
  light: "#4e4e4e33",
  dark: "#08131d33"
});
export const cardColor = theme('mode', {
  light: '#fafafa26',//gris muy claro
  dark: '#ffffff1A'//gris
});

export const h1FondoColor = theme('mode', {
  light: rosaOscuro,
  dark: azulOscuro
});
export const textoFondoColor = theme('mode', {
  light: rosaClaro,
  dark: azulClaro
});

export const iconClosedColor = theme('mode', {
  light: h1Dark,
  dark: h1Light
});
export const iconOpenedColor = theme('mode', {
  light: h1Light,
  dark: h1Dark
});

export const menuColor1 = theme('mode', {
  light: h1Dark,
  dark: h1Light
});


export const menuColor2 = theme('mode', {
  light: h2Dark,
  dark: h2Light
});
export const headerBackground = theme('mode', {
  light: 'black',
  dark: '#222'
});

export const headerText = theme('mode', {
  light: '#fafafa',
  dark: '#fafafa'
})

export const backgroundColor = theme('mode', {
  light: '#ededed',//gris muy claro
  dark: '#222'//gris
});

export const h1Color = theme('mode', {
  light: h1Light,
  dark: h1Dark
});

export const h2Color = theme('mode', {
  light: h2Light,
  dark: h2Dark
});

export const h3Color = theme('mode', {
  light: h3Light,
  dark: h3Dark
});

export const textColor = theme('mode', {
  light: textoLight,
  dark: textoDark
});

export const linksColor = theme('mode' , {
  light: linksLight,
  dark: linksDark
});

export const buttonBackgroundColor = theme('mode', {
    light: '#222',
    dark: '#eee'
});

export const buttonTextColor = theme('mode', {
    light: linksLight,
    dark: linksDark
});

export const switchToggle = theme('mode', {
  light:  "0",
  dark: "calc(100% - 35px)"
});