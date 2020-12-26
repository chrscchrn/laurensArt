import React from 'react'
import { Box } from 'rebass'
import Header from '../components/header'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Walk = () => {

    let { allFile: { edges } } = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "walk"}}) {
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
    
    return (
        <Layout>
            <Nav bg="lightBluePrimary"/>
            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    textAlign: 'center',
                }}>
                <Header c="black"fontSize={[4, 5, 6]}>
                    A 3D render of a Walk I Took in Brown University
                </Header>

            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={edges[1].node.childImageSharp.fluid}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={edges[0].node.childImageSharp.fluid}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={edges[2].node.childImageSharp.fluid}/>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={edges[3].node.childImageSharp.fluid}/>
            </Box>


            <Footer/>
        </Layout>
    )
}

export default Walk