import styled from 'styled-components';

const Sliding = styled.article`
    
    width:65%;
    position:absolute;
    left: ${props => props.isShown ? '0%' : '100%'};
    animation:${props => props.isShown ? 'slider-in' : 'slider-out'} 2s;
    -moz-animation:${props => props.isShown ? 'slider-in' : 'slider-out'} 2s;
    -webkit-animation:${props => props.isShown ? 'slider-in' : 'slider-out'} 2s; 

    div {
        display:flex;
        background-image:url('imagen del sliding article');
    }

    div h1 {
        margin: 3em;
        width:2em;
    }

    p {
        box-sizing:border-box;
        padding:1em 0px 1em 3em;
    }

    
    /*  KEYFRAMES DE LA ANIMACION  */;
    @keyframes slider-in{
    from {left: 100%} 
    to{left:0%} 
    };

    @-moz-keyframes slider-in{
        from {left: 100%} 
        to{left:0%} 
    };

    @-webkit-keyframes slider-in{
        from {left: 100%} 
        to{left:0%} 
    };
    
    @keyframes slider-out{
    from {left: 0%} 
    to{left:100%} 
    };

    @-moz-keyframes slider-out{
        from {left: 0%} 
        to{left:100%} 
    };

`

export default Sliding