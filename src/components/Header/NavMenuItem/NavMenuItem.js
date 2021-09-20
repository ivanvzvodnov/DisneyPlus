import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from './NavMenuItem.style'

export const NavMenuItem = ({src, value, href = '/home'}) => {
    return (
        <Container>
            <Link to = {href}>
                <img src = {src} alt = {value} />
                <span>{value}</span>
            </Link>
        </Container>
    )
}
