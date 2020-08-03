import styled from 'styled-components';

export const TestimonialCardStyle = styled.div`
  @media (max-width: 375px) {
    width: 100%;
    max-width: 300px;
    height: auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 25px;
    margin: ${({ margin }) => margin};
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.05);

  }
`;

export const QuoteIcon = styled.span `

`

export const TestimonialParagraph = styled.p `
    font-size: 0.65rem;
    color: var(--very-dark-blue);
    line-height: 19px;
`