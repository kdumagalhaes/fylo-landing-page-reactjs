import React from 'react' 
import {BigTitleTag} from './BigTitleStyles'

const BigTitle = ({text, padding, margin}) => {
    return (
        <BigTitleTag padding={padding} margin={margin}>
            {text}
        </BigTitleTag>
    )
}

export default BigTitle