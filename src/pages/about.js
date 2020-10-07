import React from 'react'
import Layout from '../containers/Layout';
import Main from '../components/MainPage/styled';
import Paragraph from '../components/Paragraph'
import Divcont from '../components/Divcont'


//LO QUE QUERIA HACER ACA ERAN 2 DIVS SUJETOS A UN CONTENEDOR, UNA MITAD CON EL TEXTO INTRODUCTORIO Y DEL OTRO LADO FOTOS NUESTRAS 
const About = () => {
    return (
        <Layout>
            <Main>

               <Divcont>
                <Paragraph>
           
            <span>FARP UI</span> es una interfaz gráfica maquetada por dos alumnos de la Universidad Maimonides, 
            Franco Picco y Alvaro Ramirez. La finalidad de la misma es poder materializar conceptos
             vinculados a la estética ciberpunk minimalista, dejando expuestas un catalogo flexible 
             de elementos usables por cualquier internauta.
            
            </Paragraph>
            </Divcont>

           
            </Main>
        </Layout>
    )
}

export default About