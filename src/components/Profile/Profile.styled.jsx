import styled from '@emotion/styled';

export const Card = styled.div`
    background: ${props => props.theme.colors.white};
    margin: 10px;
`;
export const Description = styled.div`
    text-align: center;
    padding-top: 20px;
    img {
        border-radius: 50%;
    }
`;

export const UserName = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: ${props => props.theme.colors.primeText};
    padding-bottom: 20px;
`;

export const Tag = styled.p`
    font-size: 24px;
    color: ${props => props.theme.colors.grey};
    padding-bottom: 20px;
`;
export const Location = styled.p`
    font-size: 24px;
    color: ${props => props.theme.colors.grey};
    padding-bottom: 20px;
`;

export const ListStats = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    background: ${props => props.theme.colors.bgColor};
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: ${props => `1px solid ${props.theme.colors.white}`};
    flex-grow: 1;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 15px;
    padding-left: 15px;
`;

export const ListLabel = styled.span`
    font-size: 16px;
    text-align: center;
    color: ${props => props.theme.colors.secondText};
    padding-bottom: 10px;
`;

export const ListQuantity = styled.span`
    font-size: 20px;
    text-align: center;
    color: ${props => props.theme.colors.primeText};
`;