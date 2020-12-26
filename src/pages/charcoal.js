import React from 'react'
import { Box } from 'rebass'
import Header from '../components/header'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Charcoal = () => {

    let { allFile: { edges } } = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "charcoal"}}) {
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
        );
    })

    return (
        <Layout>
            <Nav bg="black"/>
            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    textAlign: 'center',
                }}>
                <Header c="black"fontSize={[4, 5, 6]}>
                    Charcoal Drawings
                </Header>

            </Box>
            
            {images}

            <Footer/>
        </Layout>
    )
}

export default Charcoal