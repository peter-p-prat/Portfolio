import theme from 'styled-theming';
import blob1 from '../../images/blob1.svg';
import blob from '../../images/blob.svg';

  //Colores
  const h1Light = "#4e4e4e";
  const h2Light = "#636363";
  const h3Light = "#656565";
  const textoLight = "#757575";
  const linksLight = "#39DBE2";

  const arena = "#c9c8ac";
  const arena2 = "#b0af87";
  const verde = "#246c3e";
  const verde2 = "#246c3eBF";
  const verde3 = "#246c3e99";
  const azulAgua = "#1996af";
  const azulAguaTranslucido = "#1996afA6";
  const azulPantalonLight = "#308697";

   //Colores Dark
   const h1Dark = "#ECECEC";
   const h2Dark = "#F3F3F3";
   const h3Dark = "#F5F5F5";
   const textoDark = "#E8E8E8";
   const linksDark = "#39DBE2";
   const azulFondoClaro = "#768fa6";
   const azulFondoOscuro = "#526d85";
   const azulOscuro = '#08131d';
   const azulClaro = '#1c2e3e';
   const azulClaro2 = '#1c2e3e99';
   const rosa = '#e46a93';
   const rosaTranslucido = '#e46a93A6';
   //Colores
  const azulPantalonDark = "#0B4870";

   const rosaOscuro = '#FFD6E8';
   const rosaClaro = '#ffe6f1';
  
   //Colores Hero
  export const fondoColor = theme('mode', {
    light: arena,
    dark: azulFondoClaro
  });
  export const globoHero = theme('mode', {
    light: blob1,
    dark: blob
  })
  export const Titular = theme('mode', {
    light: verde,
    dark: azulOscuro
  });
  export const Resaltado = theme('mode', {
    light: azulAgua,
    dark: rosa
  });
  export const ResaltadoTranslucido = theme('mode', {
    light: azulAguaTranslucido,
    dark: rosaTranslucido
  });
  export const subTitulo = theme('mode', {
    light: h1Light,
    dark: azulClaro
  });
  export const copete = theme('mode', {
    light: h1Light,
    dark: azulClaro2
  })
  export const pantalonesSvg = theme('mode', {
    light: azulPantalonLight,
    dark: azulPantalonDark
  })
  
  //Colores Switch 
  
  export const knobSwitch = theme('mode', {
    light: arena2,
    dark: azulFondoOscuro
  })

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
  light: '#f0f0f0',//gris muy claro
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
  light: '#e3e3e3',//gris muy claro
  dark: '#222'//gris
});

export const h1Color = theme('mode', {
  light: h1Light,
  dark: h1Dark
});

export const h1ColorOpposite = theme('mode', {
  light: "#ececec",
  dark: "#4e4e4e"
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
  light:  "-1px",
  dark: "calc(100% - 34px)"
});

export const switchTogglePhone = theme('mode', {
  light:  "0",
  dark: "calc(100% - 26.25px)"
});