import React from 'react'
import { Wrap } from './SliderItem.style'

export const SliderItem = ({src}) => {
    return (
        <Wrap>
            <a>
                <img src={src} />
            </a>
        </Wrap>
    )
}