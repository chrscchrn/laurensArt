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

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]}>
                    Velit proident in nisi dolore nulla et excepteur ullamco veniam. Irure anim anim id labore ipsum Lorem velit. Ut id anim anim id sit aliquip sit ad et. Nulla cupidatat qui cupidatat sunt nostrud ipsum aliquip amet occaecat dolor do do quis. Anim nostrud occaecat culpa veniam labore elit id nulla. Culpa non nulla id laboris et et consequat aliqua culpa incididunt nostrud laborum eiusmod.
                </Text>
            </Box>
            <Footer/>
        </Layout>
    )
}

export default UselessUtensils