import React from 'react'
import {Wrap} from './Viewer.style'

export const Viewer = ({src, videoSrc}) => {
    return (
        <Wrap>
            <img src = {src} /> 
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={videoSrc} type = 'video/mp4'></source>
            </video>
        </Wrap>
    )
}