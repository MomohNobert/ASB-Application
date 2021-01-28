import styled from 'styled-components';

export const TRContainer = styled.tr`
    height: 11.3%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    background: #FFFFFF;
    box-shadow: inset 0px -1px 0px rgba(183, 183, 183, 0.25);

    .th-input-container {
        width: 10%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        input {
            margin-left: 20px;
            height: 15px;
            width: 15px;
        }

        img {
            margin-left: 25px;
        }
    }

    .th-name,
    .th-location,
    .th-status,
    .th-entries {
        width: 17.5%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .th-risk-profile {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .th-location,
    .th-entries {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`