import styled from 'styled-components';

export const LogoStyled = styled.h1`
  margin: ${({ margin }) => margin};
  @media (max-width: 375px) {
    img {
      width: 6rem;
    }
  }
`;
