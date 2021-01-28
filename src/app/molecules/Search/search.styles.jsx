import styled from 'styled-components';

export const SearchContainer = styled.div`
    height: 100%;
    display: grid;
    margin-left: 30px;
    place-items: center;
    position: relative;

    img {
        position: absolute;
        left: 10px;
    }
`;

export const InputContainer = styled.input`
    width: 176px;
    height: 36px;
    border: 1px solid #DCE1E7;
    border-radius: 4px;
    padding: 0;
    padding-left: 30px;
`