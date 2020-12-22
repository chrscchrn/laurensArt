import React from 'react'
import { Box } from 'rebass'
// import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image';
import Header from '../header'
import './menu.css'
import { Link } from 'gatsby';

const MenuItem = ({ fluid: { node: { childImageSharp: { fluid }}}, bg, title }) => {
    return (
        <Box px={2} py={2} width={1/3} className="card">
            <Link to="/scrapbook">
                <Box className="overWrapper">
                    <Header c='white' className="menuTitle">Title</Header>
                </Box>
                <Box bg={bg} >
                    <Img fluid={fluid} className="menuImage"/>
                </Box>
            </Link>
        </Box>
    )
}

export default MenuItem