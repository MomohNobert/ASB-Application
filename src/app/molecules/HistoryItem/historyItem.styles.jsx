import styled from 'styled-components'

export const HIContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Top = styled.div`
    width: 100%;
    height: 50%;

    p {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 140%;
        color: #747474;
    }
`

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    height: 20%;

    span {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 140%;
        color: #A1AACE;
    }
`