import styled from 'styled-components';
// import BgCurveMobile from '../../../assets/bg-curve-mobile.svg'
import Illustration2 from '../../../assets/illustration-2.svg';

export const StayProductiveDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #f8f8fe;
  margin: 80px auto 0;
  padding-bottom: 80px;

  @media (max-width: 375px) {
    background-image: url(${Illustration2});
    background-repeat: no-repeat;
    background-size: 340px;
    background-position: top;
  }
`;
