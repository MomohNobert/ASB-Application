import styled from 'styled-components';

export const HeaderStyle = styled.header`
    height: 102px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const THContent = styled.div`
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    box-shadow: inset 0px -1px 0px rgba(220, 225, 231, 0.572143);
`

export const FlexLeft = styled.div`
    display: flex;
    height: 100%;
    width: 45%;
`;

export const FlexRight = styled.div`
    display: flex;
    height: 100%;
    width: 30%;
    align-items: center;
    justify-content: flex-end;
    margin-right: 35px;
`;