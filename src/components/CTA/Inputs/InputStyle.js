import styled from 'styled-components';

export const InputTag = styled.input.attrs({
  type: 'text',
})`
  &::placeholder {
    opacity: 0.5;
  }
  @media (max-width: 375px) {
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth};
    background-color: ${({ backgroundColor }) => backgroundColor};
    box-shadow: ${({ shadow }) => shadow};
    height: 50px;
    margin: ${({margin}) => margin};
    padding-left: 15px;
    border-radius: 3px;
    border: 1px solid var(--very-dark-blue);
  }
`;
