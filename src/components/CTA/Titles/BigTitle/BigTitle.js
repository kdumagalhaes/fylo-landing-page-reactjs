import React from 'react' 
import {BigTitleTag} from './BigTitleStyles'

const BigTitle = ({text, padding, margin, responsivePadding}) => {
    return (
        <BigTitleTag padding={padding} margin={margin} responsivePadding={responsivePadding}>
            {text}
        </BigTitleTag>
    )
}

export default BigTitle