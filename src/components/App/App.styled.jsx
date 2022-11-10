import styled from '@emotion/styled';

export const Container = styled.div`
        display: flex;
        justifyContent: center;
        flexDirection: column;
        alignItems: center;
        fontSize: 40;
        color: ${props => props.theme.colors.black};
        background: ${props => props.theme.colors.lightGrey};
        `;