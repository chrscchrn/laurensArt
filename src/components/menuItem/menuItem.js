import React from 'react'
import { Box } from 'rebass'
// import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image';
import Header from '../header'
import './menu.css'
import { Link } from 'gatsby';

const MenuItem = ({ fluid: { url, title, node: { childImageSharp: { fluid }}}, bg }) => {
    return (
        <Box px={2} py={2} width={1/3} className="card">
            <Link to={url}>
                <Box className="overWrapper">
                    <Header fontSize={[ 3, 4, 5 ]} c='white' className="menuTitle">{title}</Header>
                </Box>
                <Box bg={bg} >
                    <Img fluid={fluid} className="menuImage"/>
                </Box>
            </Link>
        </Box>
    )
}

export default MenuItem