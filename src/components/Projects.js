import React, { Fragment, useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { useQuery } from "graphql-hooks";
import Project from './Project';
import Proyecto from './Project copy';
import { converter } from '../helper';

const Wrapper = styled.div`
    
    background-color: var(--colorClaro);
    margin: 0;
    padding: 0.1 1rem;
    

`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    align-items: center;
    padding: 2rem 3rem;
    @media (min-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
    }
`;

const Waves = styled.div`
    margin:0;
    padding:3rem 0 0 0;
    position:relative;
    
    overflow-x: hidden;
    svg {
        display: block;
        width: 104%;
        margin:0;
        padding: 0;
        background-color: var(--colorClaro);
    }
`;
const Titulo = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 3rem;
    padding: 3rem;
`;

const Svg = styled.svg`
    height:clamp(1rem, 8vw, 8rem);
    padding: 0.1rem;
    margin: 0;
`;


const Projects = (props) => {
    
    const [proyectos, setProyectos] = useState({});
    const [consultar, setConsultar] = useState(false);
    const QUERY_PROYECTOS = `
            {
            allProyectos(orderBy: _createdAt_ASC) {
            nombre
            linkarepo
            linkasitio
            tecnologias
            }
        }
    `;
    const { loading, error, data} = useQuery(QUERY_PROYECTOS, {
        variables: {
        limit: 10
        }
    });
    if (loading) return "loading...";
    if (error) return "algo malo paso";
 
    

    
    
    const array = ["datocms", "react", "js", "gatsby", "css"];
    converter(array);
    console.log(array);
    
    
      
    // useEffect(() => {
    //     const Perro = "soy un perro";
    //     const Gorila = "Soy de la ucr";

    //     let Arr = ["perro", "gorila"];
        
    //     converter(Arr);

    // }, [])
    const framework7 = <span class="iconify" data-icon="logos-framework7" data-inline="false"></span>;
    const Reactjs = <Svg id="Layer_2"  version="1.1" viewBox="0 0 600 600" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><circle className="st0" cx="299.5" cy="299.6" r="50.2" fill="#00D8FF"/><g><path className="st0" d="M299.5,414.6c-70.5,0-132.1-8.3-178.2-24.1c-29.9-10.2-55.3-23.8-73.4-39.3c-19.2-16.4-29.4-34.3-29.4-51.6   c0-33.2,36.4-65.7,97.5-86.9c50-17.4,115.2-27.1,183.4-27.1c67,0,131.3,9.4,181,26.6c29.1,10,53.6,23,71,37.4   c18.9,15.8,28.9,33.1,28.9,50c0,34.5-40.7,69.4-106.3,91.1C427.6,406.1,365.6,414.6,299.5,414.6z M299.5,209.6   c-64.7,0-128.7,9.4-175.5,25.7c-56.2,19.6-81.4,46.4-81.4,64.3c0,18.6,27.1,47.9,86.5,68.2c43.6,14.9,102.6,22.8,170.4,22.8   c63.6,0,122.9-8,167-22.7c61.7-20.5,89.9-49.8,89.9-68.3c0-9.5-7.2-20.7-20.3-31.6c-15.1-12.6-37.1-24.1-63.4-33.2   C425.4,218.6,363.9,209.6,299.5,209.6z" fill="#00D8FF"/></g><g><path className="st0" d="M185.6,549.8c-10.2,0-19.2-2.2-26.8-6.6c-28.7-16.6-38.7-64.4-26.6-127.9c9.9-52.1,34.1-113.3,68.2-172.4   c33.5-58,73.7-109,113.4-143.5c23.2-20.2,46.7-35,67.9-42.8c23.1-8.5,43.1-8.5,57.7-0.1c29.9,17.2,39.8,70,25.8,137.6   c-9.9,48-33.5,105.9-66.5,163.2c-35.2,61-73.2,110.2-109.9,142.3c-23.8,20.8-48.3,36-70.7,43.9   C206.4,547.7,195.4,549.8,185.6,549.8z M210.7,248.9l10.4,6c-32.3,56-56.2,116.1-65.4,164.9c-11.1,58.5-0.4,93.7,15,102.6   c3.8,2.2,8.8,3.4,14.9,3.4c19.9,0,51.2-12.6,87.4-44.2c34.7-30.3,71-77.5,104.9-136.2c31.8-55.1,54.4-110.5,63.8-156   c13.1-63.7,1.8-102.7-14.3-112c-8.2-4.7-21.5-4.1-37.5,1.8c-18.5,6.8-39.4,20.1-60.4,38.4c-37.7,32.8-76.2,81.6-108.4,137.4   L210.7,248.9z" fill="#00D8FF"/></g><g><path className="st0" d="M413.4,550.1c-27.2,0-61.7-16.4-97.7-47.4c-40.2-34.6-81.1-86.1-115.3-145.2v0c-33.6-58-57.6-118.3-67.7-170   c-5.9-30.2-7-57.9-3.2-80.2c4.2-24.3,14.1-41.6,28.8-50.1c29.8-17.3,80.5,0.5,132.1,46.4c36.6,32.5,75,81.9,108.1,139.1   c35.3,61,59,118.5,68.4,166.3c6.1,31,7.1,59.8,2.8,83.2c-4.6,24.9-15,42.6-30,51.3C432.2,547.9,423.3,550.1,413.4,550.1z    M221.2,345.5c32.4,56,72.6,106.7,110.2,139c45.1,38.8,80.9,47.2,96.4,38.2c16.1-9.3,27.9-47.4,15.7-109   c-9-45.2-31.7-100.2-65.7-158.9c-31.9-55.1-68.6-102.4-103.3-133.2C225.9,78.4,186.5,68.7,170.4,78c-8.2,4.7-14.3,16.6-17.2,33.4   c-3.3,19.4-2.3,44.2,3.1,71.5C165.9,232,188.9,289.7,221.2,345.5L221.2,345.5z" fill="#00D8FF"/></g></Svg>;
    const JS = <Svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E"></path><path d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026" fill="#000000"></path><path d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413" fill="#000000"></path></g></Svg>;
    const datos = [
        {
            nombre: "MERN Tasks",
            tecnologias:[Reactjs,JS,Reactjs,JS,Reactjs,JS,Reactjs,JS,Reactjs,JS]
        },
        {
            nombre: "ProductHunt Clone",
            tecnologias:[Reactjs,JS]
        },
        {
            nombre: "Hotel Gatsby",
            tecnologias:[Reactjs,JS]
        },
        {
            nombre: "Joyride",
            tecnologias:[Reactjs,JS]
        }

    ]

    
    return ( 
        <Fragment>
        
        <Waves>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">          
                {/* <path fill="#526d85" fill-opacity="1" d="M0,32L24,53.3C48,75,96,117,144,154.7C192,192,240,224,288,208C336,192,384,128,432,106.7C480,85,528,107,576,112C624,117,672,107,720,117.3C768,128,816,160,864,186.7C912,213,960,235,1008,250.7C1056,267,1104,277,1152,245.3C1200,213,1248,139,1296,96C1344,53,1392,43,1416,37.3L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path> */}
                <path fill={props.theme.mode === 'dark' ? '#222' : '#ededed'} fillOpacity="1" d="M0,96L17.1,80C34.3,64,69,32,103,42.7C137.1,53,171,107,206,117.3C240,128,274,96,309,85.3C342.9,75,377,85,411,112C445.7,139,480,181,514,170.7C548.6,160,583,96,617,96C651.4,96,686,160,720,202.7C754.3,245,789,267,823,256C857.1,245,891,203,926,186.7C960,171,994,181,1029,170.7C1062.9,160,1097,128,1131,144C1165.7,160,1200,224,1234,224C1268.6,224,1303,160,1337,138.7C1371.4,117,1406,139,1423,149.3L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path> 
                {/* <path fill="#768fa6" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,90.7C320,75,400,53,480,80C560,107,640,181,720,186.7C800,192,880,128,960,112C1040,96,1120,128,1200,128C1280,128,1360,96,1400,80L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path> */}
            </svg>
        </Waves>
        <Wrapper>
            <Titulo>Proyects</Titulo>
            
            <Grid>
            {data.allProyectos.map(proyecto => (
                <Proyecto key={proyecto.nombre} nombre={proyecto.nombre} tecnologias={array}/>
            
            ))}
                {/* {datos.map(dato => (
                    <Proyecto key={dato.nombre} nombre={dato.nombre} tecnologias={dato.tecnologias}/>
                ))} */}
                
                
            </Grid>
        </Wrapper>
        </Fragment>
     );
}
 
export default withTheme(Projects);