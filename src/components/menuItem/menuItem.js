import React from 'react'
import { Box } from 'rebass'
import Img from 'gatsby-image'
import Header from '../header'
import './menu.css'

const MenuItem = ({ fluid: { node: { childImageSharp: { fluid }}}, film }) => {
    return (
        <Box px={2} py={1} width={1/3}>
            <Img fluid={fluid} fadeIn={true}/>
            <section className="menu">
                <Header>Props</Header>
            </section>
        </Box>
    )
}

export default MenuItem