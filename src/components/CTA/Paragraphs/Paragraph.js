import React from 'react'
import {ParagraphTag} from './ParagraphsStyles'

const Paragraph = ({children, fontColor, textAlign}) => {
    return (
        <ParagraphTag fontColor={fontColor} textAlign={textAlign}>
            {children}
        </ParagraphTag>
    )
}

export default Paragraph