import styled from 'styled-components'

export const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position :relative;
a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    position: relative;
    padding: 4px;

    img{
        width: 100%;
        height: 100%;
    }

    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }
}
`