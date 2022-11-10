import styled from '@emotion/styled';

export const FriendsListUl = styled.ul`
    padding: 0;
    list-style: none;
    text-align: center;
    margin: 10px;
`;
export const FriendsItem = styled.li`
    padding: 20px;
    padding-right: 80px;
    :not(:last-child) {
        margin-bottom: 10px;
    }
    display: flex;
    align-items: center;
    border: 1px solid #ffffff;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    img {
        margin-right: 20px;
    }
`;

export const Status = styled.span`
    margin-right: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendsName = styled.p`
    font-size: 24px;
`