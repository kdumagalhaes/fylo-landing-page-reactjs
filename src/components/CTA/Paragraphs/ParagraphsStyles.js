import styled from 'styled-components';

export const ParagraphTag = styled.div`
max-width: 520px;

@media (max-width: 375px) {
    color: ${({color}) => color};
    text-align: ${({textAlign}) => textAlign};
    margin-top: ${({marginTop}) => marginTop};
    padding: ${({padding}) => padding}
}
`;
