import styled from 'styled-components'

export const MHContainer = styled.div`
    width: 95%;
    height: 57.5%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
`;

export const MHTitle = styled.div`
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;

    img {
        margin-right: 10px;
    }
`

export const MContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    img {
        height: 76%;
        margin-top: 10px;
    }
`

export const MCDetails = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`