import styled from 'styled-components';

const P = styled.p`
    
    span{
        font-style: italic;
    color: orange;
    }

    
    margin: 0 auto;
    color: #ececec;
    font-size: 1.1em;
    font-family: 'Poppins',sans-serif;

    color: ${props => {
        switch (props.page) {
            case 'home':
                return 'red';
            case 'experiment':
                return 'white';
            case 'about':
                return '#ececec';
        }
    }

    

    };
      font-family: 'Poppins', sans-serif;
`

export default P