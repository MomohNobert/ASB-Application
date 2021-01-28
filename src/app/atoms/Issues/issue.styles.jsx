import styled from 'styled-components';

export const IssueContainer = styled.div`
    height: 22px;
    padding: 2px 12px;
    border-radius: 11px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    background: ${({issue}) => issue ? "#FFF6DE" : "#F6F3FF" };

    p {
        color: ${({issue}) => issue ? "#F4B400" : "#8C70FF" };
    }
`