import React from 'react'
import { Box, Text } from 'rebass'
import Header from '../components/header'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from "gatsby"

const Metashape = () => {

    let { allFile: { edges } } = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "meta"}}) {
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
    
    let images = edges.map((img) => {
        return (
            <Box
            sx={{
                maxWidth: 512,
                mx: 'auto',
                px: 0,
                py: 4,
            }}>
                <Img fluid={img.node.childImageSharp.fluid}/>
            </Box>
        )
    })

    return (
        <Layout>
            <Nav bg="creamPrimary"/>
            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    textAlign: 'center',
                }}>
                <Header c="black"fontSize={[4, 5, 6]}>
                    Metashape Self-Portrait
                </Header>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="gray" fontSize={[2, 3, 4]}>
                    3D scans of myself with my arms in different positions for each picture.
                </Text>
            </Box>
            
            {images}

            <Footer/>
        </Layout>
    )
}

export default Metashape