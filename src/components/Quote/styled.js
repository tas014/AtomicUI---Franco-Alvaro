import styled from 'styled-components';

const Div = styled.div`

border-left: ${(props) => {
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

  border-left: solid 2px;
  font-style:oblique;
  margin-left: 30px;
  font-family: 'Poppins', sans-serif;
`

export default Div