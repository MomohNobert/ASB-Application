import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 17.5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
    border-radius: 6px;
`;

export const CardContent = styled.div`
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px;

    p {
        font-weight: 500;
    }
`

export const CardImage = styled.div`
    width: 30%;
    height: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-right: 10px;

    img {
        cursor: pointer;
    }
`