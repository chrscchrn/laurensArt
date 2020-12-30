import React from 'react'
import { Box } from 'rebass'
import Img from 'gatsby-image'
import Header from '../header'
import './menu.css'
import { Link } from 'gatsby'

const MenuItem = ({ fluid: { url, title, node: { childImageSharp: { fluid }}}, bg }) => {
    return (
        <Box px={[0, 0, 2]} py={[0, 0, 2]} width={1/3} className="card">
            <Link to={url}>
                <Box className="overWrapper">
                    <Header fontSize={[ 1, 3, 5 ]} py={[0, 1, 2]} my={[0, 1, 2]} c='white' className="menuTitle">
                        {title}
                    </Header>
                </Box>
                <Box bg={bg} >
                    <Img fluid={fluid} className="menuImage"/>
                </Box>
            </Link>
        </Box>
    )
}

export default MenuItem