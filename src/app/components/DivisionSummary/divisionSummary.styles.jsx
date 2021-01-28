import styled from 'styled-components'

export const DSContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 6px;
`;

export const DSTitle = styled.div`
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 5%;

    img {
        margin-right: 10px;
    }
`

export const DSItem = styled.div`
    height: 13.5%;
    margin-left: 5%;
    width: 100%;
    display: flex;
    align-items: center;

    div {
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }

    p {
        font-weight: 700;
    }

    .journal {
        text-decoration: underline;
        color: #5771ee;  
    }
`