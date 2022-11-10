import styled from '@emotion/styled';

export const Card = styled.div`
    background: #fff;
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
    color: #000000;
    padding-bottom: 20px;
`;

export const Tag = styled.p`
    font-size: 24px;
    color: #afb0b3;
    padding-bottom: 20px;
`;
export const Location = styled.p`
    font-size: 24px;
    color: #afb0b3;
    padding-bottom: 20px;
`;

export const ListStats = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    background: #ededed;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid #ffffff;
    flex-grow: 1;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 15px;
    padding-left: 15px;
`;

export const ListLabel = styled.span`
    font-size: 16px;
    text-align: center;
    color: #9b9c9e;
    padding-bottom: 10px;
`;

export const ListQuantity = styled.span`
    font-size: 20px;
    text-align: center;
    color: #000000;
`;