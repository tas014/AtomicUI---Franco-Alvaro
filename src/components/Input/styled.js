import styled from 'styled-components';

const TextInput = styled.input.attrs({
    type: 'text',
    placeholder: 'your answer...'
})`

    padding:1em;

`

const TextAreaInput = styled.textarea`
 font-family: 'Poppins', sans-serif;
margin: 0px;
    width: 90%;
    height: 80px;
    background: none;
    resize: none;
    outline: none;
    border: 2px solid white;
    padding: 10px; 
    transition:0.6s all;
    color:white;
    font-size:12px;
    cursor: crosshair !important;

    :focus{
        border: 2px solid orange;
        transition:0.6s all;
        padding: 30px; 
    }

    :hover{
        border: 2px solid orange;
        transition:0.6s all;
    }
`

const SubmitInput = styled.input.attrs({
    type: 'submit',
})`

    padding:1em 2em;

`

const SelectInput = styled.select`
    width: auto;
    padding: 8px;
    margin: 20px;
    margin-left: 0px;
    border: none;
    color: orange;
    font-weight: 600;
    outline: none;
    font-family: 'Gugi',monospace;
    cursor: crosshair;
    transition:0.6s all;

    option {
        width: 100%;
    padding: 1em;
    outline: none;
    background: #ffffff;
    border: none;
    color: orange;
    padding: 20px !important;
    border-radius: 6px;
    margin: 20px;
    font-family: 'Gugi',monospace;
    cursor: crosshair !important;
    }

`

export { SelectInput, SubmitInput, TextAreaInput, TextInput }