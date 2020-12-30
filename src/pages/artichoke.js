import Img from 'gatsby-image'
import React from 'react'
import { Box, Text } from 'rebass'
import Footer from '../components/footer/footer'
import Header from '../components/header'
import Layout from '../components/layout/layout'
import Nav from '../components/nav/nav'
import { graphql, useStaticQuery } from "gatsby"

const Artichoke = () => {

    let { allFile: { edges } } = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "artichoke"}}) {
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

    let one, two, three, four, final;
    for (let img of edges) {
        switch (img.node.base) {
            case '1.jpg':
                one = img.node.childImageSharp.fluid;
                break;
            case '2.jpg':
                two = img.node.childImageSharp.fluid;
                break;
            case '3.jpg':
                three = img.node.childImageSharp.fluid;
                break;
            case '4.jpg':
                four = img.node.childImageSharp.fluid;
                break;
            case 'final.jpg':
                final = img.node.childImageSharp.fluid;
                break;
            default: 
                break;
        }
    }


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
                    A focus on a single artichoke from the same point of view, five times.
                </Header>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]} className="textBody">
                    Black conte crayons, line and tone studied separately, inconsideration towards accuracy 30 min.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={one} alt=""/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]} className="textBody">
                    Compressed charcoal, focus on line and tone and their simultinaity, study of object’s relationship with light/shadows, 3 hrs.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={two} alt=""/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]} className="textBody">
                    Brown and orange conte crayons, brown focused on tone, orange focused on line, quick draw, 10 min.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={three} alt=""/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]} className="textBody">
                    Lines created from charcoal residue on finger tips, focus on range of pressure to create depth, 20 min.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={four} alt=""/>
            </Box>

            <Box
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    py: 4,
                }}>
                <Text c="black"fontSize={[3, 4, 5]} className="textBody">
                    Artichoke sitting in a formal dining room staring at a grey fox skull compressed charcoal, combination of realism and minimalism to induce emotions from artichoke - personification, 2 hrs.
                </Text>
            </Box>

            <Box
                sx={{
                    maxWidth: 512,
                    mx: 'auto',
                    px: 0,
                    py: 4,
                }}>
                <Img fluid={final} alt=""/>
            </Box>
            
            <Footer/>
        </Layout>
    )
}

export default Artichoke