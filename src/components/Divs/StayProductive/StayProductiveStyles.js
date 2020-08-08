import styled from 'styled-components';
import BgCurveMobile from '../../../assets/bg-curve-mobile.svg'
import BgCurveDesktop from '../../../assets/bg-curve-desktop.svg'
import Illustration2 from '../../../assets/illustration-2.svg';

export const BgCurveSpan = styled.span `
display: block;
  height: 80px;
  width: 100%;
  background-image: url(${BgCurveDesktop});

  @media (max-width: 375px) {
    margin-top: 80px;
    height: 40px;
    background-image: url(${BgCurveMobile});
  }
`

export const StayProductiveDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #f8f8fe;
  margin: 0 auto 0;
  padding-bottom: 80px;

  @media (max-width: 375px) {
    background-image: url(${Illustration2});
    background-repeat: no-repeat;
    background-size: 340px;
    background-position: center;
    background-position-y: 40px;
  }
`;
