import styled from '@emotion/styled';

export const Table = styled.table`
    background: #fff;
    text-align: center;
    margin-bottom: 50px;
`;

export const Tbody = styled.tbody`
    border: 1px solid #ddd;
    padding: 8px;
    :nth-of-type(odd) {
        background-color: #f2f2f2;
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
        border: 1px solid #ddd;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 100px;
        padding-right: 100px;
        background: #41d1cf;
        font-size: 22px;
        font-weight: 700;
        color: #ffffff;
    }
`;