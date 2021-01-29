import styled from 'styled-components'

export const DSContainer = styled.div`
    width: 95%;
    height: 45%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
`;

export const DSTitle = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;

    img {
        margin-right: 10px;
    }
`

export const DSItem = styled.div`
    height: 12.5%;
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
        font-weight: 500;
    }

    .journal {
        text-decoration: underline;
        color: #5771ee;  
    }
`