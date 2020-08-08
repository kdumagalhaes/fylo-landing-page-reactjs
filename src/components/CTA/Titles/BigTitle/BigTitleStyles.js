import styled from 'styled-components'

export const BigTitleTag = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 2.5rem;
  color: var(--very-dark-blue);
  width: 100%;
  max-width: 520px;
  margin: 120px 0 20px 0;

@media (max-width: 375px) {
  text-align: center;
  font-size: 1.6rem;
  padding-top: 280px;
}
`