import styled from 'styled-components';

export const ParagraphTag = styled.div`
  max-width: 520px;
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  
  @media (max-width: 375px) {
    margin: ${({ marginResponsive }) => marginResponsive};
    padding: ${({ padding }) => padding};
  }
`;
