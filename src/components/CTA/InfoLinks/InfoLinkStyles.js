import styled from 'styled-components';

export const InfoLinkTag = styled.a.attrs(({ url }) => ({
  href: url,
}))`
  border-bottom: 1px solid var(--moderate-cyan);
  text-decoration: none;
  color: var(--moderate-cyan);
  width: 170px;
  opacity: 1;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.75;
  }

  @media (max-width: 375px) {
    text-align: center;
    display: block;
    margin: ${({margin}) => margin};
  }
`;
