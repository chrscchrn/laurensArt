import React from 'react'
import { Box } from 'rebass'
import Img from 'gatsby-image'
import Header from '../header'
import { css } from '@emotion/react'
import './menu.css'

const MenuItem = ({ fluid: { node: { childImageSharp: { fluid }}}, bg, title }) => {
    return (
        <Box px={2} py={2} width={1/3}>
            <Box className="overlay" bg={bg}>
                <Img fluid={fluid} fadeIn={true} className="menuImage">
                    <Header>Title</Header>
                </Img>
                
            </Box>
        </Box>
    )
}

export default MenuItem