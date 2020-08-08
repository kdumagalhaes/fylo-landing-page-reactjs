import styled from 'styled-components';
import Illustration1 from '../../../assets/illustration-1.svg';

export const SecureLocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  height: 500px;
  padding: var(--safe-area-padding);
  background-image: url(${Illustration1});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 600px;

  @media (max-width: 375px) {
    display: block;
    height: auto;
    margin-top: 85px;
    background-repeat: no-repeat;
    background-position: top;
    background-size: 330px;
  }
`;
