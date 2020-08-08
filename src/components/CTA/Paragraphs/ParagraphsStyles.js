import styled from 'styled-components';

export const ParagraphTag = styled.div`
max-width: 520px;
margin: ${({margin}) => margin};

@media (max-width: 375px) {
    color: ${({color}) => color};
    text-align: ${({textAlign}) => textAlign};
    margin: ${({marginResponsive}) => marginResponsive};
    padding: ${({padding}) => padding}
}
`;
