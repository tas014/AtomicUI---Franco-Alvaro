import React from 'react'
import Layout from '../containers/Layout'
import Main from '../components/MainPage/styled'
import Pabout from '../pages/styled'
import Contabout from '../pages/styled'
import Foto1 from '../img/foto1.jpg'
//import Foto2 from '../img/foto2.jpeg'


//LO QUE QUERIA HACER ACA ERAN 2 DIVS SUJETOS A UN CONTENEDOR, UNA MITAD CON EL TEXTO INTRODUCTORIO Y DEL OTRO LADO FOTOS NUESTRAS 
const About = () => {
    return (
        <Layout>
            <Main>

               <div>
                <Pabout>
           
            <span>FARP UI</span> es una interfaz gráfica maquetada por dos alumnos de la Universidad Maimonides, 
            Franco Picco y Alvaro Ramirez. La finalidad de la misma es poder materializar conceptos
             vinculados a la estética ciberpunk minimalista, dejando expuestas un catalogo flexible 
             de elementos usables por cualquier internauta.
            
            </Pabout>
            </div>

           
            </Main>
        </Layout>
    )
}

export default About