import React from 'react'
import { BgImage, Container, Content, CTA, CTALogoOne, CTALogoTwo, Description, SignUp } from './Login.style'

export const Login = () => {
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