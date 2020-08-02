import React from 'react'
import {ParagraphTag} from './ParagraphsStyles'

const Paragraph = ({children, color, textAlign, marginTop, padding}) => {
    return (
        <ParagraphTag color={color} textAlign={textAlign} marginTop={marginTop} padding={padding}>
            {children}
        </ParagraphTag>
    )
}

export default Paragraph