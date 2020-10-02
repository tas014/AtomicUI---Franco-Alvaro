import styled from 'styled-components';

const P = styled.p`
    
    color: ${props => {
        switch (props.page) {
            case 'home':
                return 'red';
            case 'experiment':
                return 'white';
            case 'about':
                return 'green';
        }
    }

    };
      font-family: 'Poppins', sans-serif;
`

export default P