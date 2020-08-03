import styled from 'styled-components'

export const SmallTitleTag = styled.h3 `
    color: ${({color}) => color};
    font-size: ${({fontSize}) => fontSize};
    font-family: 'Raleway', sans-serif;

    @media (max-width: 375px) {
        text-align: center;
        padding-top: ${({padding}) => padding};
    }
`