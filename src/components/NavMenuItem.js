import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function NavMenuItem({src, value, href = '/home'}) {
    return (
        <Container>
            <Link to = {href}>
                <img src = {src} alt = {value} />
                <span>{value}</span>
            </Link>
        </Container>
    )
}

const Container = styled.div`
a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
    }
`

export default NavMenuItem