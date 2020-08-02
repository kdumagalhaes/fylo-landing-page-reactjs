import styled from 'styled-components';

export const InputTag = styled.input.attrs(({ placeholder }) => ({
  type: 'text',
  placeholder,
}))`
  &::placeholder {
    opacity: 0.5;
  }
  @media (max-width: 375px) {
    width: ${({ width }) => width};
    background-color: ${({ backgroundColor }) => backgroundColor};
    box-shadow: ${({ shadow }) => shadow};
    height: 50px;
    margin-top: 30px;
    padding-left: 15px;
    border-radius: 3px;
    border: 1px solid var(--very-dark-blue);
  }
`;
