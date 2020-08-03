import styled from 'styled-components';

export const ButtonTag = styled.button`
  box-shadow: ${({shadow}) => shadow};
  font-size: ${({ fontSize }) => fontSize};
  background-color: var(--bright-blue);
  color: var(--light-grayish-blue);
  font-weight: 700;
  height: 50px;
  margin-top: 15px;
  border-radius: 5px;
  border: none;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: none;
  }
  @media (max-width: 375px) {
    width: ${({ width }) => width};
  }
`;
