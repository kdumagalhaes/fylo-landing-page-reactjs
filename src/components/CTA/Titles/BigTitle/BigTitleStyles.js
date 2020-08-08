import styled from 'styled-components'

export const BigTitleTag = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 2.3rem;
  color: var(--very-dark-blue);
  width: 100%;
  max-width: 600px;
  margin: ${({margin}) => margin};

@media (max-width: 375px) {
  padding: ${({responsivePadding}) => responsivePadding};
  text-align: center;
  font-size: 1.6rem;
}
`