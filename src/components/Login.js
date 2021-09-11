import React from 'react'
import styled from 'styled-components'


function Login(props) {
    return (
        <Container text-align="center">
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>With this account you can access: Disney+, Star Wars, Marvel, and other Walt Disney Company services.</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png"></CTALogoTwo>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    width: 100%;
    position :relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height :100%
`

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    background-size :cover;
    position :absolute;
    top:0;
    left: 0;
    right: 0;
    z-index: -1;
`

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    display: block;
    max-width: 600px;
    min-height:1px;
    width: 100%;
    text-align: center;
    justify-content: center;
`

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover {
    background-color: #0483ee;
    }
`

const Description = styled.div`
    font-size : 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
    max-width: 600px;
    min-height: 1px;
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
`

export default Login