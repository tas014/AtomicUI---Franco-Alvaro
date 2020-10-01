import styled from 'styled-components';

const P = styled.p`

    color: ${(props) => {
        switch (props.page) {
            case 'home':
                'blue';
                break;
            case 'experiment':
                'red';
                break;
            case 'about':
                'green';
                break;
        }
    }
    };
`

export default P