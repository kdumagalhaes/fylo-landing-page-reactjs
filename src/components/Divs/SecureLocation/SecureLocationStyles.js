import styled from 'styled-components';
import Illustration1 from '../../../assets/illustration-1.svg';

export const SecureLocationDiv = styled.div`
  width: 100%;
  max-width: 1340px;
  height: auto;
  padding: var(--safe-area-padding);


  @media (max-width: 375px) {
    margin-top: 85px;
    background-image: url(${Illustration1});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 330px;
  }
`;
