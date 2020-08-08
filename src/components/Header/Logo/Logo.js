import React from 'react'
import {LogoStyled} from './LogoStyles'

const Logo = ({margin, children}) => {
    return (
        <LogoStyled margin={margin}>
            {children}
        </LogoStyled>
    )
}

export default Logo