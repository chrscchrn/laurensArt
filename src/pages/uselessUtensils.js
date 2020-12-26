import React from 'react'
import { Box, Text } from 'rebass'
import Footer from '../components/footer/footer'
import Header from '../components/header'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav'
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from 'gatsby-image'


const UselessUtensils = () => {

    let { allFile: { edges } } = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "utensils"}}) {
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
        return <GatsbyImage fluid={img.node.childImageSharp.fluid}/>
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
                <Header c="black" fontSize={[4, 5, 6]}>
                    Useless Utensils
                </Header>

            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                {images}
            </Box>
            <Footer/>
        </Layout>
    )
}

export default UselessUtensils