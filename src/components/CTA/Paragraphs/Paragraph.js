import React from 'react'
import {ParagraphTag} from './ParagraphsStyles'

const Paragraph = ({children, color, textAlign, margin, padding, marginResponsive}) => {
    return (
        <ParagraphTag color={color} textAlign={textAlign} margin={margin} marginResponsive={marginResponsive} padding={padding}>
            {children}
        </ParagraphTag>
    )
}

export default Paragraph