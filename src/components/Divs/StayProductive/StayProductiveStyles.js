import styled from 'styled-components';
import BgCurveMobile from '../../../assets/bg-curve-mobile.svg';
import BgCurveDesktop from '../../../assets/bg-curve-desktop.svg';
import Illustration2 from '../../../assets/illustration-2.svg';

export const ContentDiv = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  padding: var(--safe-area-padding);
`;

export const BgCurveSpan = styled.span`
  display: block;
  height: 80px;
  width: 100%;
  background-image: url(${BgCurveDesktop});

  @media (max-width: 375px) {
    margin-top: 80px;
    height: 40px;
    background-image: url(${BgCurveMobile});
  }
`;

export const StayProductiveDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #f8f8fe;
  margin: 0 auto 0;
  padding: 80px 0 80px 0;
  background-image: url(${Illustration2});
  background-repeat: no-repeat;
  background-size: 500px;
  background-position-x: 860px;
  background-position-y: 120px;


  @media (max-width: 375px) {
    background-repeat: no-repeat;
    background-size: 340px;
    background-position: center;
    background-position-y: 40px;
  }
`;
