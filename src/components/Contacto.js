import React, {Fragment, useState } from 'react';
import styled, {withTheme} from 'styled-components';
import emailjs from 'emailjs-com';
import apiKeys from '../apikeys';

import { Resaltado, fondoColor, h2Color, ResaltadoTranslucido, cardColor } from './ui/theme';
const Titulo = styled.h1`
    display: inline;
    text-align: center;
    font-size: 3rem;
    margin: 2rem 0 3rem 0;
    background-size: 100% 0.5em;
    background-repeat: no-repeat;
    background-position: center 100%;
    background-image: linear-gradient(120deg, ${Resaltado} 0%,${Resaltado} 100%);
`;
const Categoria = styled.p`
    text-align: center;
    padding: 0 2rem;
    width:80%;
    margin:0.5rem;
    a { 
        color: ${h2Color};
        text-decoration:none;
        background-size: 100% 0.2em;
        background-repeat: no-repeat;
        background-position: center 90%;
        background-image: linear-gradient(120deg, ${Resaltado} 0%,${Resaltado} 100%);
        &:hover {
            background-size: 100% 0.5em;
            background-position: center 100%;
        }
    };
`;
const Wrapper = styled.div`
    padding: 22vw 1rem 20vw 1rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    
`;
const Grid = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 2rem;
    row-gap:0;
    align-items: center;
    justify-items: center;
    justify-content:center;
    @media(min-width:1200px){
        width:100%;
    }
`;

const Form = styled.form`
    width:80%;
    margin-top:1.5rem;
    padding:0 1.5rem 1.5rem 1.5rem;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    /* border: 1.5px solid $ {ResaltadoTranslucido}; */
    border-radius: 5px;
    background-color: ${cardColor};
    input[type=text],
    input[type=email],
    textarea {   
        /* Remove First */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width:90%;
        font-size:1rem;
        border: 1px solid ${Resaltado};
        border-radius: 5px;
        transition: all .2s ease-in-out;
        padding:3px 7px;
        &:focus{
            outline: none;
            border: 2.5px solid ${fondoColor};
        }
    }
    
`;
const Label = styled.p`
    width:90%;
    max-width: 80vw;
    margin:0;
    padding: 1rem 0;
`;

const Input = styled.input`
    max-width: 80vw;
    height: 1.8rem;
`;
const Textarea = styled.textarea`
    max-width: 80vw;
    height: 50vh;
    max-height:15rem;
    
`;
const Boton = styled.button`

    /* Remove First */
    -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width:90%;
        max-width: 17rem;
        height:3rem;
        margin-top: 3rem;
        padding:3px 7px;
        font-size:1rem;
        font-weight: 600;
        border-width: ${props => props.enviando ? "2.5px " : "1px"} ;
        border-color: ${ResaltadoTranslucido};
        border-style: solid;
        border-radius: 5px;

        background-color: ${props => props.enviando ? "#404040" : "#4e4e4e"};
        color: ${Resaltado};

        transition: all .2s ease-in-out;
        
        &:focus{
            outline: none;
            border: 2.5px solid ${fondoColor};
            background-color: #404040;
        };
`;

const Aviso = styled.p`
        width:90%;
        max-width: 17rem;
        height:3rem;
        margin: 2rem 0 0;
        padding:3px 7px;
        font-size:1rem;
        font-weight: 600;
        border: 1px solid ${Resaltado};
        border-radius: 5px;
        background-color: ${ResaltadoTranslucido};
        color: #4e4e4e;
        display:flex;
        align-items: center;
        justify-content: center;
        transition: all .2s ease-in-out;
`;




const Mensajewrapper = styled.div`
    max-width: 80vw;
    margin:0;
    padding: 0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`;

const Contacto = (props) => {
    
    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [contactandome, actualizarContactandome] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const handleChange = e => {
        actualizarContactandome({
            ...contactandome,
            [e.target.name]: e.target.value
        });
    }
    
    const { name, email, subject, message } = contactandome;

    const onSubmit=(e)=>{
        // Prevents default refresh by the browser
        e.preventDefault();
        setEnviando(true);
        emailjs.sendForm('service_ugerwe8', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
        .then(result => {
        setEnviando(false);
        setEnviado(true);
        setTimeout(() => {
            setEnviado(false);
          }, 4000);
        //Limpiar formulario
        actualizarContactandome({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
        },
        error => {
        alert( 'An error occured, Plese try again',error.text)
        })
        }


    return ( 
        <Fragment>
            
            <Wrapper ref={props.refProp}>
                <Titulo>Contacto</Titulo>
                <Categoria>Si tenés una propuesta laboral que crees que podría interesarme, querés hacerme algún comentario sobre mi sitio web o simplemente probar si todo funciona correctamente, no dudes en contactarme. Te contestaré a la brevedad. </Categoria>
                <Categoria>Podes hacerlo enviandome un email a través del siguiente formulario o dirigiendote a mi perfil de <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pedro-peirano-prat/">LinkedIn</a>.</Categoria>
                <Categoria>Ademas, haciendo click en <a href='/docs/Pedro Peirano Prat CV - Desarrollador web Jr.pdf' download='Pedro Peirano Prat CV - Desarrollador web'>este enlace</a> podes descargar mi Curriculum Vitae.</Categoria>
                
                <Form  onSubmit = {onSubmit}>
                    
                    <Grid>
                        <Mensajewrapper>
                            <Label>Nombre:</Label>
                            <Input name='name' type='text' placeholder='Tu nombre' value={name} onChange={handleChange} required/>
                            <Label>Email:</Label>
                            <Input name='email' type='email' placeholder='Tu email' value={email} onChange={handleChange} required/>
                            <Label>Asunto:</Label>
                            <Input name='subject' type='text' placeholder='Ingresa un asunto' value={subject} onChange={handleChange} required/>
                        </Mensajewrapper>

                        <Mensajewrapper>
                            <Label>Mensaje:</Label>
                            <Textarea name='message' type='text' placeholder='Ingresa tu mensaje' value={message} onChange={handleChange} required></Textarea>
                        </Mensajewrapper>

                    </Grid>
                    {!enviado ? 
                        <Boton type="submit" enviando={enviando}>{enviando ? "Enviando" : "Enviar"}</Boton> 
                        :
                        <Aviso>Enviado</Aviso>
                    } 
                    
                </Form>
              
                
            </Wrapper>
            
        </Fragment>
        
     );
}
 
export default withTheme(Contacto);