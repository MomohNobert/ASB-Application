import styled from 'styled-components'

export const RPContainer = styled.div`
    width: 150px;
    height: 18px;
    display: flex;
    align-items: center;

    div {
        width: 18px;
        display: grid;
        place-items: center;
    }

    p {
        margin-left: 15px;
    }

    .high {
        color: #B63A3A;
    }

    .mid {
        color: #3C3AB6;
    }

    .low {
        color: #3AB65C;
    }
`;