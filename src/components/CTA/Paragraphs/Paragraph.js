import React from 'react'
import {ParagraphTag} from './ParagraphsStyles'

const Paragraph = ({children, color, textAlign, margin, padding, marginResponsive, maxWidth}) => {
    return (
        <ParagraphTag color={color} textAlign={textAlign} margin={margin} marginResponsive={marginResponsive} padding={padding} maxWidth={maxWidth}>
            {children}
        </ParagraphTag>
    )
}

export default Paragraph