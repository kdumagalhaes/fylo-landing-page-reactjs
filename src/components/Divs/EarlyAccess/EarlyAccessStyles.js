import styled from 'styled-components';

export const EarlyAccessDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--desaturated-blue);
  margin: 0 auto;
  padding: 80px 0 80px 0;
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  padding: var(--safe-area-padding);

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const RightSideCTA = styled.div `
display: flex;
flex-direction: column;
width: 100%;
max-width: 500px;

@media (max-width: 375px) {
  align-items: center;
}
`