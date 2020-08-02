import React from 'react'
import {LogoStyled} from './LogoStyles'
import LogoSVG from '../../../assets/logo.svg'

const Logo = () => {
    return (
        <LogoStyled>
            <a href="/#"><img src={LogoSVG} alt="fylo description SEO"/></a>
        </LogoStyled>
    )
}

export default Logo