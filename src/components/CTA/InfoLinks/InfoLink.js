import React from 'react'
import {InfoLinkTag} from './InfoLinkStyles'

const InfoLink = ({children, url, margin}) => {
    return(
        <InfoLinkTag url={url} margin={margin}>
            {children}
        </InfoLinkTag>
    )
}

export default InfoLink