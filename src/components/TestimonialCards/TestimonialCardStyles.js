import styled from 'styled-components';
import IconQuotes from '../../../src/assets/icon-quotes.svg'

export const TestimonialCardStyle = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 25px;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 375px) {
    margin: ${({ margin }) => margin};
  }
`;

export const QuoteIcon = styled.span`
  display: block;
  height: 12px;
  width: 15px;
  margin-bottom: 10px;
  background-image: url(${IconQuotes});
  background-repeat: no-repeat;
`;

export const TestimonialParagraph = styled.p`
  font-size: 0.65rem;
  color: var(--very-dark-blue);
  line-height: 19px;
`;
