import React from 'react'
import { Box } from 'rebass'
import BackgroundImage from 'gatsby-background-image'
import Header from '../header'
import './menu.css'

const MenuItem = ({ fluid: { node: { childImageSharp: { fluid }}}, bg, title }) => {
    return (
        <Box px={2} py={2} width={1/3} className="card">
            <Box bg={bg}>
                <BackgroundImage fluid={fluid} fadeIn={true} className="menuImage">
                    <Header c='black' className="textOverlay">Title</Header>
                </BackgroundImage>
            </Box>
        </Box>
    )
}

export default MenuItem