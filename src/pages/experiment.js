import React, { useState } from 'react';
import Layout from '../containers/Layout';
import Main from '../components/MainPage/styled';
import Article from '../components/Article';
import { Holder } from '../components/Article/styled';
import im1 from '../components/img/hendri-sabri-XnXLpjOCZe0-unsplash.jpg';
import im2 from '../components/img/inaki-del-olmo-Trn2-DwoEr0-unsplash.jpg';
import Card from '../components/SideCard';
import SlideArticle from '../components/Sliding';
import Logo from '../components/Logo'
//import ReactGlobe from 'react-globe';
// <ReactGlobe /> NO ME FUNCIONA, A VECES SE ROMPE Y A VECES TARTA 1 SIGLO EN COMPILAR


const Experiment = () => {
    const [shown, setShown] = useState(false);

    return (
        <Layout>
            <Main>
                <Holder>
                    <div>
                        <Article odd={false}>
                            <img src={im1} alt='image1' />
                            <p>Why hello there sexy</p>
                        </Article>
                        <Article odd={false}>
                            <img src={im2} alt='image2' />
                            <p>Why hello there sexu</p>
                        </Article>
                    </div>
                    <Card onClick={() => setShown(!shown)}>FARP</Card>
                    <SlideArticle isShown={shown}>
                        <div>
                            <Logo />
                        </div>
                        <p>Es que soy tan crack que ni yo me lo creo</p>
                    </SlideArticle>
                </Holder>
            </Main>
        </Layout>
    )
}

export default Experiment