import React from 'react'
import { Box, Text } from 'rebass'
import Header from '../components/header'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from 'gatsby-image'

const Providence = () => {

    let { allFile: { edges } } = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "map"}}) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid {
                                aspectRatio
                                base64
                                sizes
                                src
                                srcSet
                            }
                        }
                    }
                }
            }
        }
    `)

    console.log(edges);

    return (
        <Layout>
            <Nav bg="greenPrimary"/>
            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    textAlign: 'center',
                }}>
                <Header c="black"fontSize={[4, 5, 6]}>
                    Map of Providence, Rhode Island
                </Header>

            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <GatsbyImage fluid={edges[0].node.childImageSharp.fluid} />
            </Box>

            <Box
                sx={{
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[2, 3, 4]}>
                    This is a collaboration between myself and one of my classmates, Lucinda. Her original drawing is the eight drawings that are contained within the white border in the middle of the piece. These sequence of drawings depict a map or journey to a certain place in downtown Providence. I followed this map of hers to the final destination and added my addition to her drawing. 
                </Text>
                <br/>
                <Text c="black"fontSize={[2, 3, 4]}>
                    Since her map had illustrations of this yellow character, I made a magenta-colored friend to follow them on their journey, as it’s how I felt when following her map, like I was indirectly joining her. It’s a distant yet intimate experience following something that somebody else made for you to do.
                </Text>
            </Box>
            <Footer/>
        </Layout>
    )
}

export default Providence