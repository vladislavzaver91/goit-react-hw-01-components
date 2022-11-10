import styled from '@emotion/styled';
import RandomColor from 'utils/RandomColor';

export const Section = styled.section`
    margin: 10px;
    padding-top: 20px;
    background: #ffffff;
    text-align: center;
    outline: 1px solid #ffffff;
`;
export const Title = styled.h2`
    margin-bottom: 30px;
    color: #adacac;
    font-size: 32px;
`;

export const StatList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
`;
export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    outline: 1px solid #ffffff;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 80px;
    background: ${RandomColor};
`;

export const Label = styled.span`
    font-size: 18px;
`;

export const Percentage = styled.span`
    font-size: 24px;
`;