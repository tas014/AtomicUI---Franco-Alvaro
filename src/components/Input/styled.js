import styled from 'styled-components';

const TextInput = styled.input.attrs({
    type: 'text',
    placeholder: 'your answer...'
})`

    padding:1em;

`

const TextAreaInput = styled.textarea`

    height:10vh;
    width:40%;
    padding:2em;

`

const SubmitInput = styled.input.attrs({
    type: 'submit',
})`

    padding:1em 2em;

`

const SelectInput = styled.select`
    width:40%;

    option {
        width:100%;
        padding:1em;
    }

`

export { SelectInput, SubmitInput, TextAreaInput, TextInput }