import styled from '@emotion/styled';

export const Table = styled.table`
    background: ${props => props.theme.colors.white};
    text-align: center;
    margin-bottom: 50px;
`;

export const Tbody = styled.tbody`
    border: ${props => `1px solid ${props.theme.colors.borderColor}`};
    padding: 8px;
    :nth-of-type(odd) {
        background-color: ${props => props.theme.colors.secondBgColor};
    }
    td {
        font-size: 18px;
        padding-top: 5px;
        padding-bottom: 5px;
        :first-of-type {
            font-weight: 500;
        }
    }
`;

export const Thead = styled.thead`
    th {
        border: ${props => `1px solid ${props.theme.colors.borderColor}`};
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 100px;
        padding-right: 100px;
        background: ${props => props.theme.colors.thirdBgColor};
        font-size: 22px;
        font-weight: 700;
        color: ${props => props.theme.colors.white};
    }
`;