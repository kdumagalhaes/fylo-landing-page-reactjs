import styled from 'styled-components';

export const ParagraphTag = styled.div`

@media (max-width: 375px) {
    color: ${({fontColor}) => fontColor};
    text-align: ${({textAlign}) => textAlign};
    margin-top: 30px
}
`;
