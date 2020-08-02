import styled from 'styled-components';

export const ParagraphTag = styled.div`

@media (max-width: 375px) {
    color: ${({color}) => color};
    text-align: ${({textAlign}) => textAlign};
    margin-top: ${({marginTop}) => marginTop};
    padding: ${({padding}) => padding}
}
`;
