import styled from 'styled-components'

export const MenuContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MenuItem = styled.div`
    width: 33.3%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    border-bottom: ${({active}) => active ? "4px solid #006FD6" : "4px solid transparent"};
    background-color: ${({active}) => active ? "#DEEFFF" : "none"};

    span {
        margin-top: 5px;
        color: ${({active}) => active ? "#006FD6" : "black"};
        font-weight: ${({active}) => active ? "700" : "400"};
    }


    img {
        margin-top: 5px;
        margin-right: 10px;
    }
`