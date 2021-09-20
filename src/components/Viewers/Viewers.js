import React from 'react'
import {Viewer} from './Viewer/Viewer'
import { Container } from './Viewers.style'

export const Viewers = () => {
    return (
        <Container>
            <Viewer src = '/images/viewers-disney.png' videoSrc = '/videos/1564674844-disney.mp4'/>
            <Viewer src = '/images/viewers-pixar.png' videoSrc = '/videos/1564676714-pixar.mp4'/>
            <Viewer src = '/images/viewers-marvel.png' videoSrc = '/videos/1564676115-marvel.mp4'/>
            <Viewer src = '/images/viewers-starwars.png' videoSrc = '/videos/1608229455-star-wars.mp4'/>
            <Viewer src = '/images/viewers-national.png' videoSrc = '/videos/1564676296-national-geographic.mp4'/>
        </Container>
    )
}