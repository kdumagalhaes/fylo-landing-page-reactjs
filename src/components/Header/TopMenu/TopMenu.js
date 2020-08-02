import React from 'react'
import {Nav} from './TopMenuStyles'

const TopMenu = () => {
    return (
        <Nav>
            <ul>
                <li><a href="/#">Features</a></li>
                <li><a href="/#">Teams</a></li>
                <li><a href="/#">Sign In</a></li>
            </ul>
        </Nav>
    )
}

export default TopMenu