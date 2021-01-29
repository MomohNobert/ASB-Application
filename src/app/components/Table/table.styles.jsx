import styled from 'styled-components';

export const TableContainer = styled.table`
    height: 62.5vh;
    width: 79.25%;


    tbody {
        width: 100%;
    }

    .title-table {
        height: 45px;
        width: 100%;
        background: #F3F6F9;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: left;
    }

    .input-container {
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
    }

    .name,
    .location,
    .status,
    .entries {
        width: 17.5%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .risk-profile {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`